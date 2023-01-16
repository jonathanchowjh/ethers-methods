# hardhat-sdk

### Pre-Install Hardhat Repo
```
mkdir appName && cd appName
npx hardhat   // options: typescript-project, hardhat-toolbox
```

### Install
```
npm i -D ethers dotenv hardhat-sdk
mkdir utils && mkdir utils/json && touch utils/json/constants.json
touch .env
```
* Add the following into the ```.env``` file
```
// File: .env
GOERLI_RPC_URL='https://goerli.infura.io/v3/api-key-here'
PRIVATE_KEY_1='key'
```

### Using the SDK
* RUN ```npx hardhat compile```
* Create deploy scripts with hardhat-sdk
```
// File: scripts/deploy.ts
import sdk from 'hardhat-sdk'

const main = async () => {
  await sdk.setNetwork('goerli')
  const addr = await sdk.deployContractFromArtifacts(
    'Lock',
    'lock',
    [new Date().getTime() + (1000 * 60 * 1), { value: 1 }]
  );
  return addr
}

main()
  .then(val => console.log(val))
  .catch(err => console.error(err));
```
* Create contract scripts with hardhat-sdk
```
// File: scripts/runTest.ts
import sdk from 'hardhat-sdk'

const main = async () => {
  await sdk.setNetwork('goerli');
  const lockContract = await sdk.getContractFromArtifacts(
    'Lock',
    'lock'
  );
  const ret = await lockContract.withdraw();
  return ret;
}

main()
  .then(val => console.log(val))
  .catch(err => console.error(err));
```
* Run scripts in order
```
npx ts-node scripts/deploy.ts
npx ts-node scripts/runTest.ts
```

### SDK Documentation
```
wallet: () => Promise<import("ethers").Wallet>;
deployContractFromArtifacts: (fileName: string, contractName: string, deployArgs: any) => Promise<any>;
deployContract: (contractAbi: string, contractName: string, deployArgs: any, wallet: import("ethers").Signer) => Promise<any>;
getContractFromArtifacts: (fileName: string, contractName: string) => Promise<import("ethers").Contract>;
getContract: (contractAbi: string, contractAddress: string, wallet: import("ethers").Signer) => Promise<import("ethers").Contract>;
getNetwork: () => Promise<any>;
setNetwork: (networkName: string) => Promise<any>;
getAddresses: () => Promise<{
    [k: string]: any;
}>;
saveAddress: (name: string, value: string, file?: string | undefined) => Promise<void>;
readJson: (type?: string | undefined, name?: string | undefined, file?: string | undefined) => Promise<any>;
saveJson: (type: string, name: string, value: string, file?: string | undefined) => Promise<void>;
filterObj: (obj: Object, str: string) => {
    [k: string]: any;
};
addressName: (name: string) => Promise<string>;
wait: (ms: number) => Promise<unknown>;
getJSON: (file: string) => Promise<any>;
getFilePathFromArtifacts: (fileName: string) => Promise<string[]>;
getFilePath: (currentDirPath: string, fileName: string) => Promise<string[]>;
walk: (dir: string) => Promise<(string | undefined)[]>;
```