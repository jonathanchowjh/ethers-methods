[hardhat-sdk](README.md) / Exports

# hardhat-sdk

## Table of contents

### Type Aliases

- [KeyStringAny](modules.md#keystringany)

### Functions

- [addressName](modules.md#addressname)
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

### KeyStringAny

Ƭ **KeyStringAny**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[main.ts:17](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L17)

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

[main.ts:198](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L198)

___

### deployContract

▸ **deployContract**(`contractAbi`, `contractName`, `deployArgs`, `wallet`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAbi` | `string` |
| `contractName` | `string` |
| `deployArgs` | `any` |
| `wallet` | `Signer` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:66](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L66)

___

### deployContractFromArtifacts

▸ **deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function adds one to its input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | of Solidity Contract |
| `contractName` | `string` | of Solidity Contract |
| `deployArgs` | `any`[] | of Solidity Contract |
| `artifactLocation?` | `string` | - |

#### Returns

`Promise`<`string`\>

Address of Deployed Contract

#### Defined in

[main.ts:49](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L49)

___

### filterObj

▸ **filterObj**(`obj`, `str`): [`KeyStringAny`](modules.md#keystringany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `str` | `string` |

#### Returns

[`KeyStringAny`](modules.md#keystringany)

#### Defined in

[main.ts:195](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L195)

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

[main.ts:134](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L134)

___

### getAddresses

▸ **getAddresses**(): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:128](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L128)

___

### getContract

▸ **getContract**(`contractAbi`, `contractAddress`, `wallet`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAbi` | `string` |
| `contractAddress` | `string` |
| `wallet` | `Signer` |

#### Returns

`Promise`<`Contract`\>

#### Defined in

[main.ts:103](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L103)

___

### getContractFromArtifacts

▸ **getContractFromArtifacts**(`fileName`, `contractName`, `artifactLocation?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `contractName` | `string` |
| `artifactLocation?` | `string` |

#### Returns

`Promise`<`Contract`\>

#### Defined in

[main.ts:79](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L79)

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

[main.ts:221](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L221)

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

[main.ts:212](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L212)

___

### getJSON

▸ **getJSON**(`file`): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:206](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L206)

___

### getNetwork

▸ **getNetwork**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:116](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L116)

___

### readJson

▸ **readJson**(`type?`, `name?`, `file?`): `Promise`<`undefined` \| `string` \| [`KeyStringAny`](modules.md#keystringany)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `name?` | `string` |
| `file?` | `string` |

#### Returns

`Promise`<`undefined` \| `string` \| [`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:152](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L152)

___

### rootFolder

▸ **rootFolder**(): `string`

#### Returns

`string`

#### Defined in

[main.ts:254](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L254)

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

[main.ts:141](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L141)

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

[main.ts:174](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L174)

___

### setNetwork

▸ **setNetwork**(`networkName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `networkName` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:123](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L123)

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

[main.ts:201](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L201)

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

[main.ts:238](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L238)

___

### wallet

▸ **wallet**(): `Promise`<`Signer`\>

#### Returns

`Promise`<`Signer`\>

#### Defined in

[main.ts:19](https://github.com/jonathanchowjh/nft-contracts/blob/2b4745b/utils/main.ts#L19)
