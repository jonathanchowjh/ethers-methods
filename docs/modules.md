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

[main.ts:17](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L17)

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

[main.ts:225](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L225)

___

### deployContract

▸ **deployContract**(`contractAbi`, `contractName`, `deployArgs`, `wallet`): `Promise`<`string`\>

This function deploys contract, with ABI path, deployArgs, and a Signer

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

[main.ts:78](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L78)

___

### deployContractFromArtifacts

▸ **deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function deploys contract, looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
If there is a code block, then both TypeDoc and VSCode will treat
text outside of the code block as regular text.
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

[main.ts:53](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L53)

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

[main.ts:222](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L222)

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

[main.ts:161](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L161)

___

### getAddresses

▸ **getAddresses**(): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:155](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L155)

___

### getContract

▸ **getContract**(`contractAbi`, `contractAddress`, `wallet`): `Promise`<`Contract`\>

This function deploys contract, with ABI path, deployArgs, and a Signer

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

[main.ts:130](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L130)

___

### getContractFromArtifacts

▸ **getContractFromArtifacts**(`fileName`, `contractName`, `artifactLocation?`): `Promise`<`Contract`\>

This function creates a contract interface with a deployed contract,
looking through Artifacts for the ABI matching the fileName provided.

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

[main.ts:99](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L99)

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

[main.ts:248](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L248)

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

[main.ts:239](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L239)

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

[main.ts:233](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L233)

___

### getNetwork

▸ **getNetwork**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:143](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L143)

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

[main.ts:179](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L179)

___

### rootFolder

▸ **rootFolder**(): `string`

#### Returns

`string`

#### Defined in

[main.ts:281](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L281)

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

[main.ts:168](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L168)

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

[main.ts:201](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L201)

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

[main.ts:150](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L150)

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

[main.ts:228](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L228)

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

[main.ts:265](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L265)

___

### wallet

▸ **wallet**(): `Promise`<`Signer`\>

#### Returns

`Promise`<`Signer`\>

#### Defined in

[main.ts:19](https://github.com/jonathanchowjh/nft-contracts/blob/6aab2b7/utils/main.ts#L19)
