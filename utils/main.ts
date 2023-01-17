import fs from "fs";
import path from "path";
import { ethers, ContractFactory, Wallet } from "ethers";
import {
  PRIVATE_KEY_1,
  GOERLI_RPC_URL,
  JSON_LOCATION,
  ADDR_IDENT,
} from "./env";

// =====================================
// HARDHAT FUNCTIONS
// =====================================

export type ObjectAny = { [k: string]: any };

/**
 * This function returns a Signer connected to a provider, given the appropriate network
 * @returns {Promise<ethers.Signer>} Signer used to sign transactions
 * @example
 * ```ts
 * await wallet();
 * ```
 */
export const wallet = async (): Promise<ethers.Signer> => {
  const network = await getNetwork();
  if (network === "localhost" || network === "hardhat") {
    const provider = new ethers.providers.JsonRpcProvider(
      "http://127.0.0.1:8545/"
    );
    const connectedWallet = new Wallet(PRIVATE_KEY_1).connect(provider);
    return connectedWallet;
  }
  if (network === "goerli") {
    const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL);
    const connectedWallet = new Wallet(PRIVATE_KEY_1).connect(provider);
    return connectedWallet;
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
  if (fileList.length === 0)
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
 * @param {ethers.Signer} signer Signer used to sign transactions
 * @returns {Promise<string>} Address of Deployed Contract
 * @example
 * ```ts
 * await sdk.deployContract(
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
  signer: ethers.Signer
): Promise<string> => {
  const abi = await getJSON(contractAbi);
  const factory = new ContractFactory(abi.abi, abi.bytecode, signer);
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
    ADDR_IDENT,
    await addressName(contractName)
  );
  if (fileList.length === 0)
    throw new Error(
      "hardhat-sdk::getContractFromArtifacts::artifact-not-found"
    );
  if (typeof contractAddr !== "string")
    throw new Error(
      "hardhat-sdk::getContractFromArtifacts::contract-address-not-found"
    );
  return getContract(fileList[0], contractAddr, await wallet());
};

/**
 * This function creates a contract interface with a deployed contract.
 * @param {string} contractAbi Absolute or Relative (to project root) path of ABI JSON file
 * @param {string} contractAddress Address of Deployed Contract
 * @param {ethers.Signer} signer Signer used to sign transactions
 * @returns {Promise<ethers.Contract>} Deployed Contract ethers Interface
 * @example
 * ```ts
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
  signer: ethers.Signer
): Promise<ethers.Contract> => {
  const abi = await getJSON(contractAbi);
  if (!abi.abi) throw new Error("hardhat-sdk::getContract::abi-not-found");
  return new ethers.Contract(contractAddress, abi.abi, signer);
};

// ===================================
// JSON FORMATTING
// ===================================

/**
 * This function returns the current NETWORK
 * @returns {Promise<string>} current network (localhost / hardhat / goerli / web3)
 * @example
 * ```ts
 * await sdk.getNetwork();
 * ```
 */
export const getNetwork = async (): Promise<string> => {
  const network = await readJson("chain", "network");
  if (typeof network !== "string")
    throw new Error("hardhat-sdk::getNetwork::invalid-network");
  return network;
};

/**
 * This function changes the current NETWORK
 * @param {string} networkName name of NETWORK name to change to
 * @returns {Promise<string>} current network (localhost / hardhat / goerli / web3)
 * @example
 * ```ts
 * await setNetwork("goerli");
 * ```
 */
export const setNetwork = async (networkName: string): Promise<string> => {
  await saveJson("chain", "network", networkName);
  return getNetwork();
};

/**
 * This function returns list of all saved addresses of deployed contracts
 * @returns {Promise<ObjectAny>} list of all saved addresses of deployed contracts
 * @example
 * ```ts
 * await getAddresses();
 * ```
 */
export const getAddresses = async (): Promise<ObjectAny> => {
  const object = await readJson();
  if (!object || typeof object === "string" || !object.addresses) return {};
  return filterObj(object.addresses, await getNetwork());
};

/**
 * This function returns the saved address of given contract
 * @param {string} contractName Name of Contract to get indexed deployed addresses
 * @returns {Promise<string>} Saved address of given contract
 * @example
 * ```ts
 * await getAddress('utility');
 * ```
 */
export const getAddress = async (contractName: string): Promise<string> => {
  const addr = await readJson(ADDR_IDENT, await addressName(contractName));
  if (typeof addr !== "string")
    throw new Error("hardhat-sdk::getAddress::invalid-address");
  return addr;
};

/**
 * This function saves the address given a contract name
 * @param {string} name Name of Contract to index deployed addresses
 * @param {string} value Value of address to save
 * @param {string} file (Optional) File to save address in
 * @returns {Promise<void>} Promise to save address of given contract
 * @example
 * ```ts
 * await saveAddress('utility', '0x4d391169EcF040072d8Da35d70166f70254B32C7');
 * ```
 */
export const saveAddress = async (
  name: string,
  value: string,
  file?: string
): Promise<void> => saveJson(ADDR_IDENT, await addressName(name), value, file);

// ===================================
// READ WRITE JSON
// ===================================

/**
 * This reads json file given type and name
 * @param {string} type (Optional) Type of saved data (eg. addresses)
 * @param {string} name (Optional) Name of saved data (eg. goerli-utility)
 * @param {string} file (Optional) File that data is saved in
 * @returns {Promise<ObjectAny | string | undefined>} Object or string, depending on input
 * @example
 * ```ts
 * await readJson('addresses', 'goerli-utility');
 * ```
 */
export const readJson = async (
  type?: string,
  name?: string,
  file?: string
): Promise<ObjectAny | string | undefined> => {
  const fileName = file || JSON_LOCATION;
  await checkIfNotExist(rootFolder(), fileName);
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

/**
 * This saves to json file given type, name, and value
 * @param {string} type Type of saved data (eg. addresses)
 * @param {string} name Name of saved data (eg. goerli-utility)
 * @param {string} value Value of saved data (eg. 0x65B165C17a8660e84e4427c4024fcB784577AB05)
 * @param {string} file (Optional) File that data is saved in
 * @returns {Promise<void>} Promise to finish writing to file
 * @example
 * ```ts
 * await saveJson(
 *    'addresses',
 *    'goerli-utility',
 *    '0x65B165C17a8660e84e4427c4024fcB784577AB05'
 * );
 * ```
 */
export const saveJson = async (
  type: string,
  name: string,
  value: string,
  file?: string
): Promise<void> => {
  const fileName = file || JSON_LOCATION;
  await checkIfNotExist(rootFolder(), fileName);
  let object = await readJson(undefined, undefined, file);
  if (object === undefined) object = {};
  if (typeof object === "string") object = {};
  if (object[type] === undefined) object[type] = {};
  object[type][name] = value;
  await fs.promises.writeFile(
    path.resolve(rootFolder(), fileName),
    JSON.stringify(object)
  );
};

// ===================================
// MISC HELPER FUNCTIONS
// ===================================

/**
 * Filter Object by its key value
 * @param {Object} obj Object to filter through
 * @param {string} str Value to filter by
 * @returns {ObjectAny} Filtered Object
 * @example
 * ```ts
 * filterObj(
 *    {
 *      'goerli-utility'
 *      'localhost-utility'
 *    },
 *    'goerli'
 * );
 * ```
 */
export const filterObj = (obj: Object, str: string): ObjectAny =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(str)));

/**
 * Concat network name with contract name
 * @param {string} name Name of Contract to index deployed addresses
 * @returns {Promise<string>} concatenated network name with contract name
 * @example
 * ```ts
 * await addressName('utility');
 * ```
 */
export const addressName = async (name: string): Promise<string> =>
  `${await getNetwork()}-${name}`;

/**
 * Promise that waits for given number of milliseconds
 * @param {number} ms milliseconds to wait for
 * @returns {Promise<void>} Promise that waits for given number of milliseconds
 * @example
 * ```ts
 * await wait(1000);
 * ```
 */
export const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

/**
 * Parsed JSON given file (absolute path / relative path to root)
 * @param {string} file file path to read
 * @returns {Promise<ObjectAny>} JSON Object
 * @example
 * ```ts
 * await getJSON('utils/json/constants.json');
 * ```
 */
export const getJSON = async (file: string): Promise<ObjectAny> => {
  const rawdata = await fs.promises.readFile(path.resolve(rootFolder(), file));
  const data = JSON.parse(rawdata.toString());
  return data;
};

/**
 * Getting File Path from Artifacts
 * @param {string} fileName name of file (eg. 'Utility' given Utility.sol)
 * @param {string} artifactLocation (Optional) artifact folder location
 * @returns {Promise<string[]>} List of Absolute file paths
 * @example
 * ```ts
 * await getFilePathFromArtifacts('Utility');
 * ```
 */
export const getFilePathFromArtifacts = async (
  fileName: string,
  artifactLocation?: string
): Promise<string[]> => {
  const location =
    artifactLocation === undefined ? "artifacts/" : artifactLocation;
  return getFilePath(path.resolve(rootFolder(), location), fileName);
};

/**
 * Getting File Path from Folder
 * @param {string} currentDirPath folder location
 * @param {string} fileName name of file (eg. 'Utility' given Utility.sol)
 * @returns {Promise<string[]>} List of Absolute file paths
 * @example
 * ```ts
 * await getFilePath(
 *    path.resolve(rootFolder(), 'artifacts'),
 *    'Utility'
 * );
 * ```
 */
export const getFilePath = async (
  currentDirPath: string,
  fileName: string
): Promise<string[]> => {
  const fileList = await walk(currentDirPath);
  const filteredFileList: string[] = fileList.flat(Infinity).filter((val) => {
    if (val === undefined) return false;
    let fileNameArr = val.split("/");
    fileNameArr = fileNameArr[fileNameArr.length - 1].split(".");
    if (fileNameArr.length < 2) return false;
    if (fileNameArr[0] !== fileName) return false;
    if (fileNameArr[1] === "dbg") return false;
    return true;
  }) as string[];
  return filteredFileList;
};

/**
 * Get all files from a given parent directory
 * @param {string} dir folder location
 * @returns {Promise<string[]>} List of Absolute file paths
 * @example
 * ```ts
 * await walk(
 *    path.resolve(rootFolder(), 'artifacts')
 * );
 * ```
 */
export const walk = async (dir: string): Promise<string[]> => {
  let files = await fs.promises.readdir(dir);
  files = (await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      if (stats.isFile()) return filePath;
      throw new Error("hardhat-sdk::walk::invalid-file-type");
    })
  )) as any[];
  return files.filter((val) => {
    if (val === undefined) return false;
    return true;
  }) as string[];
};

/**
 * Get rootFolder absolute path
 * @returns {string} rootFolder absolute path
 * @example
 * ```ts
 * rootFolder();
 * ```
 */
export const rootFolder = (): string =>
  __dirname.includes("node_modules")
    ? __dirname.split("node_modules")[0]
    : path.resolve(__dirname, "../");

/**
 * Throws Error if folder does not exists
 * @param {string} root root folder (path that has been confirmed to exist)
 * @param {string} location location to check if exist
 * @returns {Promise<void>} Promise to check if path exist
 * @example
 * ```ts
 * checkIfNotExist(rootFolder(), 'artifacts/json/constants.json');
 * ```
 */
export const checkIfNotExist = async (
  root: string,
  location: string
): Promise<void> => {
  if (!root.includes(rootFolder()))
    throw new Error("hardhat-sdk::checkIfNotExist::path-not-in-root");
  const loc = location.split("/");
  const isFile = loc.length === 1;
  const filePath = path.resolve(root, loc[0]);
  const files = await fs.promises.readdir(path.resolve(root));
  if (!files.includes(loc[0])) {
    throw new Error("hardhat-sdk::checkIfNotExist::invalid-location");
  } else {
    if (isFile) return;
    await checkIfNotExist(filePath, loc.slice(1).join("/"));
  }
};

/**
 * Creates dir and file if does not exists
 * @param {string} root root folder (path that has been confirmed to exist)
 * @param {string} location location to check if exist
 * @returns {Promise<void>} Promise to create if not exist
 * @example
 * ```ts
 * createIfNotExist(rootFolder(), 'artifacts/json/constants.json');
 * ```
 */
export const createIfNotExist = async (
  root: string,
  location: string
): Promise<void> => {
  if (!root.includes(rootFolder()))
    throw new Error("hardhat-sdk::createIfNotExist::path-not-in-root");
  const loc = location.split("/");
  const isFile = loc.length === 1;
  const filePath = path.resolve(root, loc[0]);
  const files = await fs.promises.readdir(path.resolve(root));
  if (!files.includes(loc[0])) {
    if (isFile) {
      await fs.promises.open(filePath, "w");
    } else {
      await fs.promises.mkdir(filePath);
      await createIfNotExist(filePath, loc.slice(1).join("/"));
    }
  } else {
    if (isFile) return;
    await createIfNotExist(filePath, loc.slice(1).join("/"));
  }
};
