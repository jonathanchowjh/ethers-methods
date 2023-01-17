# hardhat-sdk

### Pre-Install Hardhat Repo
```
mkdir appName && cd appName
npx hardhat   // options: typescript-project, hardhat-toolbox
```

### Install
```
npm i -D hardhat-sdk
touch .env
```
* Add the following into the ```.env``` file
```
// File: .env
GOERLI_RPC_URL='https://goerli.infura.io/v3/api-key-here'
PRIVATE_KEY_1='key'
JSON_LOCATION='utils/json/constants.json'
```

### Using the SDK
* RUN ```npx hardhat compile```
* Create deploy scripts with hardhat-sdk
```
// File: scripts/deploy.ts
import sdk from 'hardhat-sdk';

const main = async () => {
  await sdk.setNetwork('goerli');
  await sdk.createIfNotExist(sdk.rootFolder(), sdk.JSON_LOCATION);
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
  await sdk.createIfNotExist(sdk.rootFolder(), sdk.JSON_LOCATION);
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
[FULL DOCUMENTATION](docs/modules.md)

▸ **deployContract**(`contractAbi`, `contractName`, `deployArgs`, `wallet`): `Promise`<`string`\>

This function deploys contract, with ABI path, deployArgs, and a Signer

**`Example`**

```ts
await sdk.deployContract(
   "artifacts/contracts/Utility.sol/Utility.json",
   "utility",
   [],
   await sdk.wallet()
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAbi` | `string` | Absolute or Relative (to project root) path of ABI JSON file |
| `contractName` | `string` | Name of Contract to index deployed addresses |
| `deployArgs` | `any`[] | Array of arguments to be deconstructed |
| `wallet` | `Signer` | Signer used to sign transactions |

#### Returns

`Promise`<`string`\>

Address of Deployed Contract
___

▸ **deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function deploys contract, looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
await sdk.deployContractFromArtifacts("Utility", "utility", []);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | Name of Contract file to find ABI |
| `contractName` | `string` | Name of Contract to index deployed addresses |
| `deployArgs` | `any`[] | Array of arguments to be deconstructed |
| `artifactLocation?` | `string` | (Optional) File location of ABIs |

#### Returns

`Promise`<`string`\>

Address of Deployed Contract
___

▸ **getContract**(`contractAbi`, `contractAddress`, `wallet`): `Promise`<`Contract`\>

This function creates a contract interface with a deployed contract.

**`Example`**

```ts
await sdk.getContract(
   "artifacts/contracts/Utility.sol/Utility.json",
   "0x65B165C17a8660e84e4427c4024fcB784577AB05",
   await sdk.wallet()
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `contractAbi` | `string` | Absolute or Relative (to project root) path of ABI JSON file |
| `contractAddress` | `string` | Address of Deployed Contract |
| `wallet` | `Signer` | Signer used to sign transactions |

#### Returns

`Promise`<`Contract`\>

Deployed Contract ethers Interface
___

▸ **getContractFromArtifacts**(`fileName`, `contractName`, `artifactLocation?`): `Promise`<`Contract`\>

This function creates a contract interface with a deployed contract,
looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
await sdk.getContractFromArtifacts("Utility", "utility");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | Name of Contract file to find ABI |
| `contractName` | `string` | Name of Contract to index deployed addresses |
| `artifactLocation?` | `string` | (Optional) File location of ABIs |

#### Returns

`Promise`<`Contract`\>

Deployed Contract ethers Interface
___

▸ **setNetwork**(`networkName`): `Promise`<`string`\>

This function changes the current NETWORK

**`Example`**

```ts
await setNetwork('goerli');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `networkName` | `string` | name of NETWORK name to change to |

#### Returns

`Promise`<`string`\>

current network (localhost / hardhat / goerli / web3)
___
