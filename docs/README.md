ethers-sdk / [Modules](modules.md)

# ethers-sdk

### Future Work (SDK Expansion)

This npm package is an ethers helper to create a structured and safe framework around contract deployment and testing. Future works in syntactic code analysis and unit testing helper code will help ensure safer standards when creating and

- ethers-sdk
  - Export Contract Details with ABI
  - Unit Testing (SDK code) and Corner Case Exception Handling
  - Unit Testing Helper (eg. test-coverage analysis, testing functions, etc)
  - Syntactic security analysis of contracts
- hardhat-jsonRPC
  - hardhat json RPC setup
  - Event Listener and Logger

### Pre-Install Hardhat Repo

```
mkdir appName && cd appName
npx hardhat   // options: typescript-project, hardhat-toolbox
```

### Install

```
npm i -D ethers-sdk
touch .env
```

- Add the following into the `.env` file

```
// File: .env
GOERLI_RPC_URL='https://goerli.infura.io/v3/api-key-here'
PRIVATE_KEY_1='key'
JSON_LOCATION='utils/json/constants.json'
```

### Using the SDK

- RUN `npx hardhat compile`
- Create deploy and contract scripts with ethers-sdk

```ts
// File: scripts/runTest.ts
import sdk from "ethers-sdk";

const main = async () => {
  await sdk.setNetwork("goerli");
  await sdk.createIfNotExist(sdk.rootFolder(), sdk.JSON_LOCATION);
  const addr = await sdk.deployContractFromArtifacts("Lock", "lock", [
    new Date().getTime(),
    { value: 1 },
  ]);
  await sdk.wait(10000);

  const lockContract = await sdk.getContractFromArtifacts("Lock", "lock");
  const ret = await lockContract.withdraw();
  return ret;
};

main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
```

- Run scripts in order

```
npx ts-node scripts/runTest.ts
```

## SDK Documentation

[FULL DOCUMENTATION](docs/modules.md)

### deployContract

▸ **deployContract**(`contractAbi`, `contractName`, `deployArgs`, `signer`): `Promise`<`string`\>

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

| Name           | Type     | Description                                                  |
| :------------- | :------- | :----------------------------------------------------------- |
| `contractAbi`  | `string` | Absolute or Relative (to project root) path of ABI JSON file |
| `contractName` | `string` | Name of Contract to index deployed addresses                 |
| `deployArgs`   | `any`[]  | Array of arguments to be deconstructed                       |
| `signer`       | `Signer` | Signer used to sign transactions                             |

#### Returns

`Promise`<`string`\>

Address of Deployed Contract

---

### deployContractFromArtifacts

▸ **deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function deploys contract, looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
await sdk.deployContractFromArtifacts("Utility", "utility", []);
```

#### Parameters

| Name                | Type     | Description                                  |
| :------------------ | :------- | :------------------------------------------- |
| `fileName`          | `string` | Name of Contract file to find ABI            |
| `contractName`      | `string` | Name of Contract to index deployed addresses |
| `deployArgs`        | `any`[]  | Array of arguments to be deconstructed       |
| `artifactLocation?` | `string` | (Optional) File location of ABIs             |

#### Returns

`Promise`<`string`\>

Address of Deployed Contract

---

### getContract

▸ **getContract**(`contractAbi`, `contractAddress`, `signer`): `Promise`<`Contract`\>

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

| Name              | Type     | Description                                                  |
| :---------------- | :------- | :----------------------------------------------------------- |
| `contractAbi`     | `string` | Absolute or Relative (to project root) path of ABI JSON file |
| `contractAddress` | `string` | Address of Deployed Contract                                 |
| `signer`          | `Signer` | Signer used to sign transactions                             |

#### Returns

`Promise`<`Contract`\>

Deployed Contract ethers Interface

---

### getContractFromArtifacts

▸ **getContractFromArtifacts**(`fileName`, `contractName`, `artifactLocation?`): `Promise`<`Contract`\>

This function creates a contract interface with a deployed contract,
looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
await sdk.getContractFromArtifacts("Utility", "utility");
```

#### Parameters

| Name                | Type     | Description                                  |
| :------------------ | :------- | :------------------------------------------- |
| `fileName`          | `string` | Name of Contract file to find ABI            |
| `contractName`      | `string` | Name of Contract to index deployed addresses |
| `artifactLocation?` | `string` | (Optional) File location of ABIs             |

#### Returns

`Promise`<`Contract`\>

Deployed Contract ethers Interface

---

### readJson

▸ **readJson**(`type?`, `name?`, `file?`): `Promise`<`undefined` \| `string` \| [`ObjectAny`](docs/modules.md#objectany)\>

This reads json file given type and name

**`Example`**

```ts
await readJson("addresses", "goerli-utility");
```

#### Parameters

| Name    | Type     | Description                                        |
| :------ | :------- | :------------------------------------------------- |
| `type?` | `string` | (Optional) Type of saved data (eg. addresses)      |
| `name?` | `string` | (Optional) Name of saved data (eg. goerli-utility) |
| `file?` | `string` | (Optional) File that data is saved in              |

#### Returns

`Promise`<`undefined` \| `string` \| [`ObjectAny`](docs/modules.md#objectany)\>

Object or string, depending on input

---

### rootFolder

▸ **rootFolder**(): `string`

Get rootFolder absolute path

**`Example`**

```ts
rootFolder();
```

#### Returns

`string`

rootFolder absolute path

---

### saveAddress

▸ **saveAddress**(`name`, `value`, `file?`): `Promise`<`void`\>

This function saves the address given a contract name

**`Example`**

```ts
await saveAddress("utility", "0x4d391169EcF040072d8Da35d70166f70254B32C7");
```

#### Parameters

| Name    | Type     | Description                                  |
| :------ | :------- | :------------------------------------------- |
| `name`  | `string` | Name of Contract to index deployed addresses |
| `value` | `string` | Value of address to save                     |
| `file?` | `string` | (Optional) File to save address in           |

#### Returns

`Promise`<`void`\>

Promise to save address of given contract

---

### saveJson

▸ **saveJson**(`type`, `name`, `value`, `file?`): `Promise`<`void`\>

This saves to json file given type, name, and value

**`Example`**

```ts
await saveJson(
  "addresses",
  "goerli-utility",
  "0x65B165C17a8660e84e4427c4024fcB784577AB05"
);
```

#### Parameters

| Name    | Type     | Description                                                          |
| :------ | :------- | :------------------------------------------------------------------- |
| `type`  | `string` | Type of saved data (eg. addresses)                                   |
| `name`  | `string` | Name of saved data (eg. goerli-utility)                              |
| `value` | `string` | Value of saved data (eg. 0x65B165C17a8660e84e4427c4024fcB784577AB05) |
| `file?` | `string` | (Optional) File that data is saved in                                |

#### Returns

`Promise`<`void`\>

Promise to finish writing to file

---

### setNetwork

▸ **setNetwork**(`networkName`): `Promise`<`string`\>

This function changes the current NETWORK

**`Example`**

```ts
await setNetwork("goerli");
```

#### Parameters

| Name          | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| `networkName` | `string` | name of NETWORK name to change to |

#### Returns

`Promise`<`string`\>

current network (localhost / hardhat / goerli)

---

### wallet

▸ **wallet**(): `Promise`<`Signer`\>

This function returns a Signer connected to a provider, given the appropriate network

**`Example`**

```ts
await wallet();
```

#### Returns

`Promise`<`Signer`\>

Signer used to sign transactions
