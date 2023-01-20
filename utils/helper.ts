import { getStackTrace } from "./main";

export type ObjectAny = { [k: string]: any };

export const ErrorDefault = (error: string) => {
  const name = `ethers-sdk::${getStackTrace()[1]}::${error}`;
  return new Error(name);
};
