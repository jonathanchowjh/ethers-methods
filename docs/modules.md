[ethers-sdk](README.md) / Exports

# ethers-sdk

## Table of contents

### Type Aliases

- [ObjectAny](modules.md#objectany)

### Functions

- [addressName](modules.md#addressname)
- [checkIfNotExist](modules.md#checkifnotexist)
- [createIfNotExist](modules.md#createifnotexist)
- [deployContract](modules.md#deploycontract)
- [deployContractFromArtifacts](modules.md#deploycontractfromartifacts)
- [filterObj](modules.md#filterobj)
- [getAddress](modules.md#getaddress)
- [getAddresses](modules.md#getaddresses)
- [getContract](modules.md#getcontract)
- [getContractFromArtifacts](modules.md#getcontractfromartifacts)
- [getFilePath](modules.md#getfilepath)
- [getFilePathFromArtifacts](modules.md#getfilepathfromartifacts)
- [getJSON](modules.md#getjson)
- [getNetwork](modules.md#getnetwork)
- [readJson](modules.md#readjson)
- [rootFolder](modules.md#rootfolder)
- [saveAddress](modules.md#saveaddress)
- [saveJson](modules.md#savejson)
- [setNetwork](modules.md#setnetwork)
- [wait](modules.md#wait)
- [walk](modules.md#walk)
- [wallet](modules.md#wallet)

## Type Aliases

### ObjectAny

Ƭ **ObjectAny**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[main.ts:15](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L15)

## Functions

### addressName

▸ **addressName**(`name`): `Promise`<`string`\>

Concat network name with contract name

**`Example`**

```ts
await addressName("utility");
```

#### Parameters

| Name   | Type     | Description                                  |
| :----- | :------- | :------------------------------------------- |
| `name` | `string` | Name of Contract to index deployed addresses |

#### Returns

`Promise`<`string`\>

concatenated network name with contract name

#### Defined in

[main.ts:347](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L347)

---

### checkIfNotExist

▸ **checkIfNotExist**(`root`, `location`): `Promise`<`void`\>

Throws Error if folder does not exists

**`Example`**

```ts
checkIfNotExist(rootFolder(), "artifacts/json/constants.json");
```

#### Parameters

| Name       | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| `root`     | `string` | root folder (path that has been confirmed to exist) |
| `location` | `string` | location to check if exist                          |

#### Returns

`Promise`<`void`\>

Promise to check if path exist

#### Defined in

[main.ts:479](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L479)

---

### createIfNotExist

▸ **createIfNotExist**(`root`, `location`): `Promise`<`void`\>

Creates dir and file if does not exists

**`Example`**

```ts
createIfNotExist(rootFolder(), "artifacts/json/constants.json");
```

#### Parameters

| Name       | Type     | Description                                         |
| :--------- | :------- | :-------------------------------------------------- |
| `root`     | `string` | root folder (path that has been confirmed to exist) |
| `location` | `string` | location to check if exist                          |

#### Returns

`Promise`<`void`\>

Promise to create if not exist

#### Defined in

[main.ts:507](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L507)

---

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

#### Defined in

[main.ts:88](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L88)

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

#### Defined in

[main.ts:54](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L54)

---

### filterObj

▸ **filterObj**(`obj`, `str`): [`ObjectAny`](modules.md#objectany)

Filter Object by its key value

**`Example`**

```ts
filterObj(
   {
     'goerli-utility'
     'localhost-utility'
   },
   'goerli'
);
```

#### Parameters

| Name  | Type     | Description              |
| :---- | :------- | :----------------------- |
| `obj` | `Object` | Object to filter through |
| `str` | `string` | Value to filter by       |

#### Returns

[`ObjectAny`](modules.md#objectany)

Filtered Object

#### Defined in

[main.ts:335](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L335)

---

### getAddress

▸ **getAddress**(`contractName`): `Promise`<`string`\>

This function returns the saved address of given contract

**`Example`**

```ts
await getAddress("utility");
```

#### Parameters

| Name           | Type     | Description                                        |
| :------------- | :------- | :------------------------------------------------- |
| `contractName` | `string` | Name of Contract to get indexed deployed addresses |

#### Returns

`Promise`<`string`\>

Saved address of given contract

#### Defined in

[main.ts:218](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L218)

---

### getAddresses

▸ **getAddresses**(): `Promise`<[`ObjectAny`](modules.md#objectany)\>

This function returns list of all saved addresses of deployed contracts

**`Example`**

```ts
await getAddresses();
```

#### Returns

`Promise`<[`ObjectAny`](modules.md#objectany)\>

list of all saved addresses of deployed contracts

#### Defined in

[main.ts:203](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L203)

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

#### Defined in

[main.ts:152](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L152)

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

#### Defined in

[main.ts:113](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L113)

---

### getFilePath

▸ **getFilePath**(`currentDirPath`, `fileName`): `Promise`<`string`[]\>

Getting File Path from Folder

**`Example`**

```ts
await getFilePath(path.resolve(rootFolder(), "artifacts"), "Utility");
```

#### Parameters

| Name             | Type     | Description                                    |
| :--------------- | :------- | :--------------------------------------------- |
| `currentDirPath` | `string` | folder location                                |
| `fileName`       | `string` | name of file (eg. 'Utility' given Utility.sol) |

#### Returns

`Promise`<`string`[]\>

List of Absolute file paths

#### Defined in

[main.ts:411](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L411)

---

### getFilePathFromArtifacts

▸ **getFilePathFromArtifacts**(`fileName`, `artifactLocation?`): `Promise`<`string`[]\>

Getting File Path from Artifacts

**`Example`**

```ts
await getFilePathFromArtifacts("Utility");
```

#### Parameters

| Name                | Type     | Description                                    |
| :------------------ | :------- | :--------------------------------------------- |
| `fileName`          | `string` | name of file (eg. 'Utility' given Utility.sol) |
| `artifactLocation?` | `string` | (Optional) artifact folder location            |

#### Returns

`Promise`<`string`[]\>

List of Absolute file paths

#### Defined in

[main.ts:389](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L389)

---

### getJSON

▸ **getJSON**(`file`): `Promise`<[`ObjectAny`](modules.md#objectany)\>

Parsed JSON given file (absolute path / relative path to root)

**`Example`**

```ts
await getJSON("utils/json/constants.json");
```

#### Parameters

| Name   | Type     | Description       |
| :----- | :------- | :---------------- |
| `file` | `string` | file path to read |

#### Returns

`Promise`<[`ObjectAny`](modules.md#objectany)\>

JSON Object

#### Defined in

[main.ts:373](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L373)

---

### getNetwork

▸ **getNetwork**(): `Promise`<`string`\>

This function returns the current NETWORK

**`Example`**

```ts
await sdk.getNetwork();
```

#### Returns

`Promise`<`string`\>

current network (localhost / hardhat / goerli / web3)

#### Defined in

[main.ts:174](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L174)

---

### readJson

▸ **readJson**(`type?`, `name?`, `file?`): `Promise`<`undefined` \| `string` \| [`ObjectAny`](modules.md#objectany)\>

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

`Promise`<`undefined` \| `string` \| [`ObjectAny`](modules.md#objectany)\>

Object or string, depending on input

#### Defined in

[main.ts:257](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L257)

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

#### Defined in

[main.ts:464](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L464)

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

#### Defined in

[main.ts:236](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L236)

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

#### Defined in

[main.ts:296](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L296)

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

current network (localhost / hardhat / goerli / web3)

#### Defined in

[main.ts:190](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L190)

---

### wait

▸ **wait**(`ms`): `Promise`<`void`\>

Promise that waits for given number of milliseconds

**`Example`**

```ts
await wait(1000);
```

#### Parameters

| Name | Type     | Description              |
| :--- | :------- | :----------------------- |
| `ms` | `number` | milliseconds to wait for |

#### Returns

`Promise`<`void`\>

Promise that waits for given number of milliseconds

#### Defined in

[main.ts:359](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L359)

---

### walk

▸ **walk**(`dir`): `Promise`<`string`[]\>

Get all files from a given parent directory

**`Example`**

```ts
await walk(path.resolve(rootFolder(), "artifacts"));
```

#### Parameters

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `dir` | `string` | folder location |

#### Returns

`Promise`<`string`[]\>

List of Absolute file paths

#### Defined in

[main.ts:439](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L439)

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

#### Defined in

[main.ts:25](https://github.com/jonathanchowjh/nft-contracts/blob/d250122/utils/main.ts#L25)
