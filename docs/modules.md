# hardhat-sdk

## Type Aliases

### KeyStringAny

 **KeyStringAny**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[main.ts:17](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L17)

## Functions

### addressName

**addressName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:199](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L199)

___

### deployContract

**deployContract**(`contractAbi`, `contractName`, `deployArgs`, `wallet`): `Promise`<`string`\>

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

[main.ts:67](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L67)

___

### deployContractFromArtifacts

**deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function adds one to its input.

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

[main.ts:50](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L50)

___

### filterObj

**filterObj**(`obj`, `str`): [`KeyStringAny`](modules.md#keystringany)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `str` | `string` |

#### Returns

[`KeyStringAny`](modules.md#keystringany)

#### Defined in

[main.ts:196](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L196)

___

### getAddress

**getAddress**(`contractName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractName` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:135](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L135)

___

### getAddresses

**getAddresses**(): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:129](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L129)

___

### getContract

**getContract**(`contractAbi`, `contractAddress`, `wallet`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAbi` | `string` |
| `contractAddress` | `string` |
| `wallet` | `Signer` |

#### Returns

`Promise`<`Contract`\>

#### Defined in

[main.ts:104](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L104)

___

### getContractFromArtifacts

**getContractFromArtifacts**(`fileName`, `contractName`, `artifactLocation?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `contractName` | `string` |
| `artifactLocation?` | `string` |

#### Returns

`Promise`<`Contract`\>

#### Defined in

[main.ts:80](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L80)

___

### getFilePath

**getFilePath**(`currentDirPath`, `fileName`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentDirPath` | `string` |
| `fileName` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[main.ts:222](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L222)

___

### getFilePathFromArtifacts

**getFilePathFromArtifacts**(`fileName`, `artifactLocation?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `artifactLocation?` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[main.ts:213](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L213)

___

### getJSON

**getJSON**(`file`): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:207](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L207)

___

### getNetwork

**getNetwork**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:117](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L117)

___

### readJson

**readJson**(`type?`, `name?`, `file?`): `Promise`<`undefined` \| `string` \| [`KeyStringAny`](modules.md#keystringany)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |
| `name?` | `string` |
| `file?` | `string` |

#### Returns

`Promise`<`undefined` \| `string` \| [`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:153](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L153)

___

### rootFolder

**rootFolder**(): `string`

#### Returns

`string`

#### Defined in

[main.ts:255](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L255)

___

### saveAddress

**saveAddress**(`name`, `value`, `file?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |
| `file?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:142](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L142)

___

### saveJson

**saveJson**(`type`, `name`, `value`, `file?`): `Promise`<`void`\>

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

[main.ts:175](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L175)

___

### setNetwork

**setNetwork**(`networkName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `networkName` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:124](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L124)

___

### wait

**wait**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[main.ts:202](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L202)

___

### walk

**walk**(`dir`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[main.ts:239](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L239)

___

### wallet

**wallet**(): `Promise`<`Signer`\>

#### Returns

`Promise`<`Signer`\>

#### Defined in

[main.ts:19](https://github.com/jonathanchowjh/nft-contracts/blob/5ef7d40/utils/main.ts#L19)
