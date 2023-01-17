[hardhat-sdk](README.md) / Exports

# hardhat-sdk

## Table of contents

### Type Aliases

- [ObjAny](modules.md#objany)

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

### ObjAny

Ƭ **ObjAny**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[main.ts:16](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L16)

## Functions

### addressName

▸ **addressName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:282](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L282)

___

### checkIfNotExist

▸ **checkIfNotExist**(`root`, `location`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `string` |
| `location` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:344](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L344)

___

### createIfNotExist

▸ **createIfNotExist**(`root`, `location`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `string` |
| `location` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:360](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L360)

___

### deployContract

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

#### Defined in

[main.ts:95](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L95)

___

### deployContractFromArtifacts

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

#### Defined in

[main.ts:61](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L61)

___

### filterObj

▸ **filterObj**(`obj`, `str`): [`ObjAny`](modules.md#objany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `str` | `string` |

#### Returns

[`ObjAny`](modules.md#objany)

#### Defined in

[main.ts:279](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L279)

___

### getAddress

▸ **getAddress**(`contractName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:216](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L216)

___

### getAddresses

▸ **getAddresses**(): `Promise`<[`ObjAny`](modules.md#objany)\>

This function returns list of all saved addresses of deployed contracts

**`Example`**

```ts
await getAddresses();
```

#### Returns

`Promise`<[`ObjAny`](modules.md#objany)\>

list of all saved addresses of deployed contracts

#### Defined in

[main.ts:210](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L210)

___

### getContract

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

#### Defined in

[main.ts:159](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L159)

___

### getContractFromArtifacts

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

#### Defined in

[main.ts:120](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L120)

___

### getFilePath

▸ **getFilePath**(`currentDirPath`, `fileName`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentDirPath` | `string` |
| `fileName` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[main.ts:305](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L305)

___

### getFilePathFromArtifacts

▸ **getFilePathFromArtifacts**(`fileName`, `artifactLocation?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `artifactLocation?` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[main.ts:296](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L296)

___

### getJSON

▸ **getJSON**(`file`): `Promise`<[`ObjAny`](modules.md#objany)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<[`ObjAny`](modules.md#objany)\>

#### Defined in

[main.ts:290](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L290)

___

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

[main.ts:181](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L181)

___

### readJson

▸ **readJson**(`type?`, `name?`, `file?`): `Promise`<`undefined` \| `string` \| [`ObjAny`](modules.md#objany)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `name?` | `string` |
| `file?` | `string` |

#### Returns

`Promise`<`undefined` \| `string` \| [`ObjAny`](modules.md#objany)\>

#### Defined in

[main.ts:234](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L234)

___

### rootFolder

▸ **rootFolder**(): `string`

#### Returns

`string`

#### Defined in

[main.ts:338](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L338)

___

### saveAddress

▸ **saveAddress**(`name`, `value`, `file?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |
| `file?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:223](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L223)

___

### saveJson

▸ **saveJson**(`type`, `name`, `value`, `file?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `name` | `string` |
| `value` | `string` |
| `file?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:257](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L257)

___

### setNetwork

▸ **setNetwork**(`networkName`): `Promise`<`string`\>

This function changes the current NETWORK

**`Example`**

```ts
await setNetwork("goerli");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `networkName` | `string` | name of NETWORK name to change to |

#### Returns

`Promise`<`string`\>

current network (localhost / hardhat / goerli / web3)

#### Defined in

[main.ts:197](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L197)

___

### wait

▸ **wait**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:285](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L285)

___

### walk

▸ **walk**(`dir`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[main.ts:322](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L322)

___

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

[main.ts:26](https://github.com/jonathanchowjh/nft-contracts/blob/b69c355/utils/main.ts#L26)
