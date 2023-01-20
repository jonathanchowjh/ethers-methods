import "dotenv/config";

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

export const PUBLIC_KEY_1 =
  process.env.PUBLIC_KEY_1 || "0x2Ce13D32B60dd0E89beE5D911F3F47B5E539df8F";
export const PUBLIC_KEY_2 = process.env.PUBLIC_KEY_2 || "privatKey";

/**
 * =============================
 *            CONSTANTS
 * =============================
 */
export const GOERLI_TOKEN_1 =
  process.env.GOERLI_TOKEN_1 || "0x1d9EddB94868148ef955A7234c527b3bb1483462";
export const GOERLI_TOKEN_2 =
  process.env.GOERLI_TOKEN_2 || "0xd40CbdeFa404A6092AFa265BdD69bA531c73458D";
export const GOERLI_TOKEN_3 =
  process.env.GOERLI_TOKEN_3 || "0x0b0DDE4d7eD00D3bB472a009ecEeFFdD894323b3";
export const GOERLI_TOKEN_4 =
  process.env.GOERLI_TOKEN_4 || "0x9e6795350AD0B0Bf55Cf29F78100CAf6acc6F84B";
export const GOERLI_UTILITY =
  process.env.GOERLI_UTILITY || "0x4d391169EcF040072d8Da35d70166f70254B32C7";

export const CHAINS = ["localhost", "hardhat", "goerli"];
export const JSON_LOCATION =
  process.env.JSON_LOCATION || "utils/json/constants.json";
export const ADDR_IDENT = process.env.ADDR_IDENT || "addresses";
