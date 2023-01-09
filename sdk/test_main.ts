import { getProviderEthers, getWalletEthers, getContractEthers } from "../utils/main";

const ERC20_ABI = [
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

async function main() {
  const wallet = getWalletEthers("goerli");
  const provider = getProviderEthers("goerli");
  const address = '0x2109654505cb2587f326Ae48428191A9555E0FF5'
  const contract = await getContractEthers(address, ERC20_ABI, provider, wallet);
  const tx = await contract.transfer('account2', '1')
  await tx.wait()
  const block = await provider.getBlockNumber();
  await contract.queryFilter('Transfer', block - 1, block)
  const blockInfo = await provider.getBlock(block)
  const { transactions } = await provider.getBlockWithTransactions(block)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
