import "dotenv/config";

const toNum = (str: string | undefined, num: number) => {
  if (str === undefined) return num;
  try {
    return parseInt(str, 10);
  } catch (error) {
    return num;
  }
};

/**
 * =============================
 *            KEYS
 * =============================
 */
export const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL || "https://rinkeby.infura.io/v3/your-api-key";
export const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL || "https://goerli.infura.io/v3/your-api-key";
export const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1 || "privatKey";
export const PRIVATE_KEY_2 = process.env.PRIVATE_KEY_2 || "privatKey";

export const IPFS_DEDICATED_GATEWAY =
  process.env.IPFS_DEDICATED_GATEWAY || "privatKey";
export const IPFS_PROJECT_ID = process.env.IPFS_PROJECT_ID || "privatKey";
export const IPFS_SECRET = process.env.IPFS_SECRET || "privatKey";

export const PINATA_KEY = process.env.PINATA_KEY || "key";
export const PINATA_SECRET = process.env.PINATA_SECRET || "secret";
export const PINATA_JWT = process.env.PINATA_JWT || "jwt";
export const PINATA_TEST_URI = process.env.PINATA_TEST_URI || "uri";

/**
 * =============================
 *         CONSTANTS
 * =============================
 */
export const QUORUM_PERCENTAGE = toNum(process.env.QUORUM_PERCENTAGE, 4);
export const VOTING_PERIOD = toNum(process.env.VOTING_PERIOD, 10);
export const VOTING_DELAY = toNum(process.env.VOTING_DELAY, 5);
export const MIN_DELAY = toNum(process.env.MIN_DELAY, 1);

export const DEV_CHAINS = ["localhost", "hardhat"];
// eslint-disable-next-line
export const ZERO_ADDRESS =
  process.env.ZERO_ADDRESS || "0x0000000000000000000000000000000000000000";
export const BLOCK_BUFFER = toNum(process.env.BLOCK_BUFFER, 3);
