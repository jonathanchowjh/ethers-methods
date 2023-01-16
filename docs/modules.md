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

[main.ts:17](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L17)

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

[main.ts:228](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L228)

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

[main.ts:81](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L81)

___

### deployContractFromArtifacts

▸ **deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function deploys contract, looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

If there is a code block, then both TypeDoc and VSCode will treat
text outside of the code block as regular text.
```ts
factorial(1)
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

[main.ts:56](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L56)

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

[main.ts:225](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L225)

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

[main.ts:164](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L164)

___

### getAddresses

▸ **getAddresses**(): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:158](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L158)

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

[main.ts:133](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L133)

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

[main.ts:102](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L102)

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

[main.ts:251](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L251)

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

[main.ts:242](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L242)

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

[main.ts:236](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L236)

___

### getNetwork

▸ **getNetwork**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:146](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L146)

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

[main.ts:182](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L182)

___

### rootFolder

▸ **rootFolder**(): `string`

#### Returns

`string`

#### Defined in

[main.ts:284](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L284)

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

[main.ts:171](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L171)

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

[main.ts:204](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L204)

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

[main.ts:153](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L153)

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

[main.ts:231](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L231)

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

[main.ts:268](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L268)

___

### wallet

▸ **wallet**(): `Promise`<`Signer`\>

#### Returns

`Promise`<`Signer`\>

#### Defined in

[main.ts:19](https://github.com/jonathanchowjh/nft-contracts/blob/6e79493/utils/main.ts#L19)
