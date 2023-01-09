import { HardhatEthersHelpers } from "./@types/ethers/ethers";
import { network, run } from "hardhat";
import { Contract, ethers } from "ethers";
import fs from "fs";
import path from "path";

import { DEV_CHAINS, GOERLI_RPC_URL, PRIVATE_KEY_1 } from "./env";


export const getProviderEthers = (
  network: string
) => {
  let RPC_URL = GOERLI_RPC_URL;
  if (network == 'goerli') RPC_URL = GOERLI_RPC_URL;
  if (network == 'homestead') RPC_URL = GOERLI_RPC_URL;
  return new ethers.providers.JsonRpcProvider(RPC_URL);
}

export const getWalletEthers = (
  network: string
) => {
  return new ethers.Wallet(PRIVATE_KEY_1, getProviderEthers(network));
}

export const getContractEthers = (
  address: string,
  ERC20_ABI: any,
  provider: any,
  wallet: any,
) => {
  const contract = new ethers.Contract(address, ERC20_ABI, provider)
  contract.connect(wallet);
  return contract
}

export const deployContractEthers = async (
  bytecode: string,
  ERC20_ABI: any,
  wallet: any,
) => {
  const factory = new ethers.ContractFactory(ERC20_ABI, bytecode, wallet)
  const contract = await factory.deploy(ethers.utils.parseUnits("100"));
  return contract
}

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
export const getNetwork = () => network.name;
export const getChainId = () => network.config.chainId!.toString();
export const isDevChain = () => DEV_CHAINS.includes(getNetwork());


export const getAccounts = async (ethers: HardhatEthersHelpers) =>
  ethers.getSigners();

export const getDeployer = async (ethers: HardhatEthersHelpers) => {
  const [deployer] = await ethers.getSigners();
  return deployer;
};

export const getContract = async (
  ethers: HardhatEthersHelpers,
  name: string,
  contractName: string
): Promise<Contract> => {
  const address = await readJson("addresses", addressName(name));
  if (address === undefined) throw new Error("getContract address not found");
  const contract = await ethers.getContractAt(contractName, address);
  return contract;
};

export const moveBlocks = async (amount: number) => {
  for (let index = 0; index < amount; index++) {
    await network.provider.request({
      method: "evm_mine",
      params: [],
    });
  }
  // eslint-disable-next-line
  console.log(`Moved ${amount} blocks`);
};

export const moveTime = async (amount: number) => {
  await network.provider.send("evm_increaseTime", [amount]);
  // eslint-disable-next-line
  console.log(`Moved forward in time ${amount} seconds`);
};

export const listenEvent = (
  event: string,
  contract: Contract
): Promise<any[]> =>
  new Promise((resolve) => {
    contract.on(event, (...args) => {
      resolve([...args]);
    });
  });

export const verify = async (
  contractAddress: string,
  args: any[]
): Promise<void> => {
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      // eslint-disable-next-line
      console.log("Already verified!");
    } else {
      // eslint-disable-next-line
      console.log(e);
    }
  }
};

// TODO: deployed contract returns undeployed ContractFactory
export const deployContract = async (
  ethers: HardhatEthersHelpers,
  name: string,
  args: []
) => {
  const ContractDeploy = await ethers.getContractFactory(name);
  const contract = await ContractDeploy.deploy(...args);
  await contract.deployed();
  return [ContractDeploy, contract];
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
//
export const saveAddress = async (
  name: string,
  value: string,
  file?: string
) => {
  await saveJson("addresses", addressName(name), value, file);
};

export const getAddresses = async () => {
  const object = await readJson();
  if (!object || !object.addresses) return {};
  return filterObj(object.addresses, getNetwork());
};

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

export const filterObj = (obj: Object, str: string) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => key.includes(str)));

export const addressName = (name: string) => `${getNetwork()}-${name}`;

export const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
