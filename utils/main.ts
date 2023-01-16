import fs from "fs";
import path from "path";
import { ethers, ContractFactory, Wallet } from "ethers";
import { PRIVATE_KEY_1, GOERLI_RPC_URL } from "./env";

// =====================================
// HARDHAT FUNCTIONS
// =====================================

declare global {
  interface Window {
    ethereum?: any;
  }
}

export type KeyStringAny = { [k: string]: any };

/**
 * This function returns a Signer connected to a provider, given the appropriate network
 * @returns {Promise<ethers.Signer>} Signer used to sign transactions
 * @example
 * ```ts
 * import sdk from 'hardhat-sdk';
 * await wallet();
 * ```
 */
export const wallet = async (): Promise<ethers.Signer> => {
  const network = await getNetwork();
  if (network == "localhost" || network == "hardhat") {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:8545/"
    );
    const wallet = new Wallet(PRIVATE_KEY_1).connect(provider);
    return wallet;
  }
  if (network == "goerli") {
    const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
    const wallet = new Wallet(PRIVATE_KEY_1).connect(provider);
    return wallet;
  }
  if (network == "web3") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    return signer;
  }
  throw new Error("hardhat-sdk::wallet::invalid-network");
};

/**
 * This function deploys contract, looking through Artifacts for the ABI matching the fileName provided.
 * @param {string} fileName Name of Contract file to find ABI
 * @param {string} contractName Name of Contract to index deployed addresses
 * @param {any[]} deployArgs Array of arguments to be deconstructed
 * @param {string} artifactLocation (Optional) File location of ABIs
 * @returns {Promise<string>} Address of Deployed Contract
 * @example
 * ```ts
 * import sdk from 'hardhat-sdk';
 * await sdk.deployContractFromArtifacts("Utility", "utility", []);
 * ```
 */
export const deployContractFromArtifacts = async (
  fileName: string,
  contractName: string,
  deployArgs: any[],
  artifactLocation?: string
): Promise<string> => {
  const fileList: string[] = await getFilePathFromArtifacts(
    fileName,
    artifactLocation
  );
  if (fileList.length == 0)
    throw new Error(
      "hardhat-sdk::deployContractFromArtifacts::artifact-not-found"
    );
  return deployContract(fileList[0], contractName, deployArgs, await wallet());
};

/**
 * This function deploys contract, with ABI path, deployArgs, and a Signer
 * @param {string} contractAbi Absolute or Relative (to project root) path of ABI JSON file
 * @param {string} contractName Name of Contract to index deployed addresses
 * @param {any[]} deployArgs Array of arguments to be deconstructed
 * @param {ethers.Signer} wallet Signer used to sign transactions
 * @returns {Promise<string>} Address of Deployed Contract
 * @example
 * ```ts
 * import sdk from 'hardhat-sdk';
 * await sdk.deployContractFromArtifacts(
 *    "artifacts/contracts/Utility.sol/Utility.json",
 *    "utility",
 *    [],
 *    await sdk.wallet()
 * );
 * ```
 */
export const deployContract = async (
  contractAbi: string,
  contractName: string,
  deployArgs: any[],
  wallet: ethers.Signer
): Promise<string> => {
  const abi = await getJSON(contractAbi);
  const factory = new ContractFactory(abi.abi, abi.bytecode, wallet);
  const contract = await factory.deploy(...deployArgs);
  await saveAddress(contractName, contract.address);
  return getAddress(contractName);
};

/**
 * This function creates a contract interface with a deployed contract,
 * looking through Artifacts for the ABI matching the fileName provided.
 * @param {string} fileName Name of Contract file to find ABI
 * @param {string} contractName Name of Contract to index deployed addresses
 * @param {string} artifactLocation (Optional) File location of ABIs
 * @returns {Promise<ethers.Contract>} Deployed Contract ethers Interface
 * @example
 * ```ts
 * import sdk from 'hardhat-sdk';
 * await sdk.getContractFromArtifacts("Utility", "utility");
 * ```
 */
export const getContractFromArtifacts = async (
  fileName: string,
  contractName: string,
  artifactLocation?: string
): Promise<ethers.Contract> => {
  const fileList: string[] = await getFilePathFromArtifacts(
    fileName,
    artifactLocation
  );
  const contractAddr = await readJson(
    "addresses",
    await addressName(contractName)
  );
  if (fileList.length == 0)
    throw new Error(
      "hardhat-sdk::getContractFromArtifacts::artifact-not-found"
    );
  if (typeof contractAddr != "string")
    throw new Error(
      "hardhat-sdk::getContractFromArtifacts::contract-address-not-found"
    );
  return getContract(fileList[0], contractAddr, await wallet());
};

/**
 * This function deploys contract, with ABI path, deployArgs, and a Signer
 * @param {string} contractAbi Absolute or Relative (to project root) path of ABI JSON file
 * @param {string} contractAddress Address of Deployed Contract
 * @param {ethers.Signer} wallet Signer used to sign transactions
 * @returns {Promise<ethers.Contract>} Deployed Contract ethers Interface
 * @example
 * ```ts
 * import sdk from 'hardhat-sdk';
 * await sdk.getContract(
 *    "artifacts/contracts/Utility.sol/Utility.json",
 *    "0x65B165C17a8660e84e4427c4024fcB784577AB05",
 *    await sdk.wallet()
 * );
 * ```
 */
export const getContract = async (
  contractAbi: string,
  contractAddress: string,
  wallet: ethers.Signer
): Promise<ethers.Contract> => {
  const abi = await getJSON(contractAbi);
  if (!abi.abi) throw new Error("hardhat-sdk::getContract::abi-not-found");
  return new ethers.Contract(contractAddress, abi.abi, wallet);
};

// ===================================
// JSON FORMATTING
// ===================================
export const getNetwork = async (): Promise<string> => {
  const network = await readJson("chain", "network");
  if (typeof network != "string")
    throw new Error("hardhat-sdk::getNetwork::invalid-network");
  return network;
};

export const setNetwork = async (networkName: string): Promise<string> => {
  await saveJson("chain", "network", networkName);
  return getNetwork();
};

export const getAddresses = async (): Promise<KeyStringAny> => {
  const object = await readJson();
  if (!object || typeof object == "string" || !object.addresses) return {};
  return filterObj(object.addresses, await getNetwork());
};

export const getAddress = async (contractName: string): Promise<string> => {
  const addr = await readJson("addresses", await addressName(contractName));
  if (typeof addr != "string")
    throw new Error("hardhat-sdk::getNetwork::invalid-address");
  return addr;
};

export const saveAddress = async (
  name: string,
  value: string,
  file?: string
): Promise<void> => {
  return saveJson("addresses", await addressName(name), value, file);
};

// ===================================
// READ WRITE JSON
// ===================================
export const readJson = async (
  type?: string,
  name?: string,
  file?: string
): Promise<KeyStringAny | string | undefined> => {
  const fileName = file || "utils/json/constants.json";
  const rawdata = await fs.promises.readFile(
    path.resolve(rootFolder(), fileName)
  );
  let object;
  /* eslint-disable no-empty */
  try {
    object = JSON.parse(rawdata.toString());
  } catch (e) {}
  /* eslint-enable no-empty */
  if (object === undefined) return undefined;
  if (type === undefined) return object;
  if (name === undefined) return object[type];
  if (object[type]) return object[type][name];
  return undefined;
};

export const saveJson = async (
  type: string,
  name: string,
  value: string,
  file?: string
): Promise<void> => {
  let object = await readJson(undefined, undefined, file);
  if (object === undefined) object = {};
  if (typeof object == "string") object = {};
  if (object[type] === undefined) object[type] = {};
  object[type][name] = value;
  const fileName = file || "utils/json/constants.json";
  await fs.promises.writeFile(
    path.resolve(rootFolder(), fileName),
    JSON.stringify(object)
  );
};

// ===================================
// MISC HELPER FUNCTIONS
// ===================================
export const filterObj = (obj: Object, str: string): KeyStringAny =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(str)));

export const addressName = async (name: string): Promise<string> =>
  `${await getNetwork()}-${name}`;

export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const getJSON = async (file: string): Promise<KeyStringAny> => {
  const rawdata = await fs.promises.readFile(path.resolve(rootFolder(), file));
  const data = JSON.parse(rawdata.toString());
  return data;
};

export const getFilePathFromArtifacts = async (
  fileName: string,
  artifactLocation?: string
): Promise<string[]> => {
  const location =
    artifactLocation == undefined ? "artifacts/" : artifactLocation;
  return getFilePath(path.resolve(rootFolder(), location), fileName);
};

export const getFilePath = async (
  currentDirPath: string,
  fileName: string
): Promise<string[]> => {
  const fileList = await walk(currentDirPath);
  const filteredFileList: string[] = fileList.flat(Infinity).filter((val) => {
    if (val == undefined) return false;
    let fileNameArr = val.split("/");
    fileNameArr = fileNameArr[fileNameArr.length - 1].split(".");
    if (fileNameArr.length < 2) return false;
    if (fileNameArr[0] != fileName) return false;
    if (fileNameArr[1] == "dbg") return false;
    return true;
  }) as string[];
  return filteredFileList;
};

export const walk = async (dir: string): Promise<string[]> => {
  let files = await fs.promises.readdir(dir);
  files = (await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      else if (stats.isFile()) return filePath;
    })
  )) as any[];
  return files.map((val) => {
    if (val == undefined) return;
    return val;
  }) as string[];
};

export const rootFolder = (): string => {
  return __dirname.includes("node_modules")
    ? __dirname.split("node_modules")[0]
    : path.resolve(__dirname, "../");
};
