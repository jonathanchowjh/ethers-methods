import fs, { read } from "fs";
import path from "path";
import { ethers, ContractFactory, Wallet } from "ethers";
import { PRIVATE_KEY_1, GOERLI_RPC_URL } from "./env";

/**
 * =====================================
 * HARDHAT FUNCTIONS
 * - getNetwork()                                 getNetwork()
 * - isDevChain()                                 isDevChain()
 * - getDeployer(ethers)                          await getDeployer(ethers)
 * - getContract(ethers, name)                    await getContract(ethers, "Box")
 * - moveBlocks(amount)                           await moveBlocks(1)
 * - moveTime(amount)                             await moveTime(1)
 * - listenEvent(event, contract)                 await listenEvent("Transfer", this.contract);
 * - verify(address, args) - TODO
 * - deployContract(ethers, name, args) - TODO
 * =====================================
 */

export const wallet = async () => {
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
  throw new Error("Invalid Network");
};

export const deployContractFromArtifacts = async (
  fileName: string,
  contractName: string,
  deployArgs: any
) => {
  const fileList: string[] = await getFilePathFromArtifacts(fileName);
  if (fileList.length == 0) throw new Error(`Invalid File`);
  return deployContract(fileList[0], contractName, deployArgs, await wallet());
};

export const deployContract = async (
  contractAbi: string,
  contractName: string,
  deployArgs: any,
  wallet: ethers.Signer
) => {
  const abi = await getJSON(contractAbi);
  const factory = new ContractFactory(abi.abi, abi.bytecode, wallet);
  const contract = await factory.deploy(...deployArgs);
  await saveAddress(contractName, contract.address);
  return readJson("addresses", await addressName(contractName));
};

export const getContractFromArtifacts = async (fileName: string, contractName: string) => {
  const fileList: string[] = await getFilePathFromArtifacts(fileName);
  if (fileList.length == 0) throw new Error(`Invalid File`);
  return getContract(
    fileList[0],
    await readJson("addresses", await addressName(contractName)),
    await wallet()
  );
};

export const getContract = async (
  contractAbi: string,
  contractAddress: string,
  wallet: ethers.Signer
) => {
  const abi = await getJSON(contractAbi);
  return new ethers.Contract(contractAddress, abi.abi, wallet);
};

/**
 * =====================================
 * CONTRACT ADDRESSES (json formatting)
 * - saveAddress(name, value, file?)      await saveAddress("GovernanceToken", token.address);
 * - getAddresses()                       await getAddresses()
 * - readJson(type?, name?, file?)        await readJson("addresses", addressName(name));
 * - saveJson(type, name, value, file?)
 * - filterObj(obj, str)
 * - addressName(name)
 * - wait(time)
 * =====================================
 */

// ===================================
// GET SET NETWORK
// ===================================
export const getNetwork = async () => {
  return readJson("chain", "network");
};
export const setNetwork = async (networkName: string) => {
  await saveJson("chain", "network", networkName);
  return getNetwork();
};

// ===================================
// GET SAVE ADDRESSES
// ===================================
export const getAddresses = async () => {
  const object = await readJson();
  if (!object || !object.addresses) return {};
  return filterObj(object.addresses, await getNetwork());
};

export const saveAddress = async (
  name: string,
  value: string,
  file?: string
) => {
  await saveJson("addresses", await addressName(name), value, file);
};

// ===================================
// READ WRITE JSON
// ===================================
export const readJson = async (type?: string, name?: string, file?: string) => {
  const fileName = file || "json/constants.json";
  const rawdata = await fs.promises.readFile(path.resolve(__dirname, fileName));
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
) => {
  let object = await readJson(undefined, undefined, file);
  if (object === undefined) object = {};
  if (object[type] === undefined) object[type] = {};
  object[type][name] = value;
  const fileName = file || "json/constants.json";
  await fs.promises.writeFile(
    path.resolve(__dirname, fileName),
    JSON.stringify(object)
  );
};

// ===================================
// MISC HELPER FUNCTIONS
// ===================================
export const filterObj = (obj: Object, str: string) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(str)));

export const addressName = async (name: string) =>
  `${await getNetwork()}-${name}`;

export const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const getJSON = async (file: string) => {
  const rawdata = await fs.promises.readFile(path.resolve(__dirname, file));
  const data = JSON.parse(rawdata.toString());
  return data;
};

export const getFilePathFromArtifacts = async (
  fileName: string
): Promise<string[]> => {
  return getFilePath(path.resolve(__dirname, "../artifacts"), fileName);
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

export const walk = async (dir: string) => {
  let files = await fs.promises.readdir(dir);
  files = (await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      else if (stats.isFile()) return filePath;
    })
  )) as string[];
  return files.map((val) => {
    if (val == undefined) return;
    return val;
  });
};
