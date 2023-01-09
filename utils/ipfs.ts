import fs from "fs";
import path from "path";

import { saveJson } from "./main";
import { IPFS_PROJECT_ID, IPFS_SECRET, IPFS_DEDICATED_GATEWAY } from "./env";

/* eslint-disable no-console */

export interface InfuraIPFSResponse {
  Name: string;
  Hash: string;
  Size: string;
}

export const uploadCollection = async (dirPath: string) => {
  const nfts = [];
  try {
    const dir = await fs.promises.readdir(dirPath);
    const images = dir.filter(
      (val) =>
        val.includes(".jpeg") || val.includes(".jpg") || val.includes(".png")
    );
    const jsons = dir.filter((val) => val.includes(".json"));
    // Validate File
    for (let i = 0; i < images.length; i++) {
      const jsonPath = `${images[i].split(".")[0]}.json`;
      if (!jsons.includes(jsonPath))
        throw new Error("Upload Collection: invalid metadata file");
    }
    // Upload nfts to IPFS
    for (let i = 0; i < images.length; i++) {
      console.log(`Processing ${images[i]}`);
      const jsonPath = `${images[i].split(".")[0]}.json`;
      const nft = await uploadNFT(
        `${dirPath}/${jsonPath}`,
        `${dirPath}/${images[i]}`
      );
      nfts.push(nft);
    }
  } catch (error) {
    console.log(error);
  }
  // Write nft IDs to file
  await writeNFTtoFile(nfts);
  return nfts;
};

// REQUIRES ABSOLUTE PATH
export const uploadNFT = async (
  jsonPath: string,
  imagePath: string
): Promise<string> => {
  const imageHash = await uploadFile(imagePath);
  await addToJson(jsonPath, {
    image: `${IPFS_DEDICATED_GATEWAY}/ipfs/${imageHash.Hash}`,
  });
  const jsonHash = await uploadFile(jsonPath);
  return jsonHash.Hash;
};

// REQUIRES ABSOLUTE PATH
export const uploadFile = async (
  filePath: string
): Promise<InfuraIPFSResponse> => {
  const chunks = await fs.promises.readFile(filePath);
  const form = new FormData();
  form.append("file", new Blob([chunks]));

  const res = await fetch("https://ipfs.infura.io:5001/api/v0/add", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${IPFS_PROJECT_ID}:${IPFS_SECRET}`
      ).toString("base64")}`,
    },
    body: form,
  });
  const response = await res.json();
  return response;
};

export const pinFile = async (
  fileHash: string
): Promise<InfuraIPFSResponse> => {
  const res = await fetch(
    `https://ipfs.infura.io:5001/api/v0/pin/add?arg=${fileHash}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${IPFS_PROJECT_ID}:${IPFS_SECRET}`
        ).toString("base64")}`,
      },
    }
  );
  const response = await res.json();
  return response;
};

// REQUIRES ABSOLUTE PATH
const addToJson = async (jsonPath: string, obj: Object) => {
  const file = await fs.promises.readFile(jsonPath);
  let json = JSON.parse(file.toString());
  json = {
    ...json,
    ...obj,
  };
  await fs.promises.writeFile(jsonPath, JSON.stringify(json));
};

export const writeNFTtoFile = async (nfts: Object) => {
  const entries = Object.entries(nfts);
  await fs.promises.readFile;
  for (let i = 0; i < entries.length; i++) {
    await saveJson(
      new Date().toISOString(),
      entries[i][0],
      `${IPFS_DEDICATED_GATEWAY}/ipfs/${entries[i][1]}`,
      getAbsPath("./utils/json/ipfs.json")
    );
  }
};

// REQUIRES PATH RELATIVE TO PROJECT ROOT PATH
export const getAbsPath = (filePath: string) =>
  path.resolve(__dirname, "..", filePath);
