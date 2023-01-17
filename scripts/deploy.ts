import {
  deployContractFromArtifacts,
  getContractFromArtifacts,
  readJson,
  addressName,
  wait
} from "../utils/main";

import {
  GOERLI_TOKEN_1,
  GOERLI_TOKEN_2,
  GOERLI_TOKEN_3,
  GOERLI_TOKEN_4,
  PUBLIC_KEY_1,
} from '../utils/env'

async function main() {
  await deployContractFromArtifacts("Utility", "utility", []);
  // eslint-disable-next-line
  console.log(await readJson("addresses", await addressName("utility")));
  await wait(10000);

  const TOKENS = [
    GOERLI_TOKEN_1,
    GOERLI_TOKEN_2,
    GOERLI_TOKEN_3,
    GOERLI_TOKEN_4
  ]
  const utilityContract = await getContractFromArtifacts('Utility', 'utility');
  const balances = await utilityContract.getBalances(PUBLIC_KEY_1, TOKENS);
  const ret = [...TOKENS];
  return ret.map((val, idx) => ({
    token: val,
    balance: balances[idx].toNumber()
  }));
}

/* eslint-disable no-console */
main()
  .then(val => console.log(val))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
/* eslint-enable no-console */
