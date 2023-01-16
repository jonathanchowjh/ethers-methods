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

[main.ts:16](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L16)

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

[main.ts:259](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L259)

___

### deployContract

▸ **deployContract**(`contractAbi`, `contractName`, `deployArgs`, `wallet`): `Promise`<`string`\>

This function deploys contract, with ABI path, deployArgs, and a Signer

**`Example`**

```ts
import sdk from 'hardhat-sdk';
await sdk.deployContractFromArtifacts(
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

[main.ts:98](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L98)

___

### deployContractFromArtifacts

▸ **deployContractFromArtifacts**(`fileName`, `contractName`, `deployArgs`, `artifactLocation?`): `Promise`<`string`\>

This function deploys contract, looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
import sdk from 'hardhat-sdk';
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

[main.ts:63](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L63)

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

[main.ts:256](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L256)

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

[main.ts:195](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L195)

___

### getAddresses

▸ **getAddresses**(): `Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Returns

`Promise`<[`KeyStringAny`](modules.md#keystringany)\>

#### Defined in

[main.ts:189](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L189)

___

### getContract

▸ **getContract**(`contractAbi`, `contractAddress`, `wallet`): `Promise`<`Contract`\>

This function deploys contract, with ABI path, deployArgs, and a Signer

**`Example`**

```ts
import sdk from 'hardhat-sdk';
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

[main.ts:164](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L164)

___

### getContractFromArtifacts

▸ **getContractFromArtifacts**(`fileName`, `contractName`, `artifactLocation?`): `Promise`<`Contract`\>

This function creates a contract interface with a deployed contract,
looking through Artifacts for the ABI matching the fileName provided.

**`Example`**

```ts
import sdk from 'hardhat-sdk';
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

[main.ts:124](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L124)

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

[main.ts:282](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L282)

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

[main.ts:273](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L273)

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

[main.ts:267](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L267)

___

### getNetwork

▸ **getNetwork**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[main.ts:177](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L177)

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

[main.ts:213](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L213)

___

### rootFolder

▸ **rootFolder**(): `string`

#### Returns

`string`

#### Defined in

[main.ts:315](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L315)

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

[main.ts:202](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L202)

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

[main.ts:235](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L235)

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

[main.ts:184](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L184)

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

[main.ts:262](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L262)

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

[main.ts:299](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L299)

___

### wallet

▸ **wallet**(): `Promise`<`Signer`\>

This function returns a Signer connected to a provider, given the appropriate network

**`Example`**

```ts
import sdk from 'hardhat-sdk';
await wallet();
```

#### Returns

`Promise`<`Signer`\>

Signer used to sign transactions

#### Defined in

[main.ts:27](https://github.com/jonathanchowjh/nft-contracts/blob/740ee90/utils/main.ts#L27)
