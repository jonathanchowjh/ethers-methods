import {
  getNetwork,
  setNetwork,
  deployContractFromArtifacts,
  createIfNotExist,
  rootFolder,
  getFilePathFromArtifacts
} from "./main";

// eslint-disable-next-line
export const main = async (): Promise<any> => {
  if (process.argv.length < 3) throw new Error(`Invalid process.argv array`);
  switch (process.argv[2]) {
    case "chain_localhost":
      return setNetwork("localhost");
    case "chain_goerli":
      return setNetwork("goerli");
    case "chain_read":
      return getNetwork();
    case "deploy_utility":
      return deployContractFromArtifacts("Utility", "utility", []);
    case "create_file":
      return createIfNotExist(
        rootFolder(),
        "foldr1/foldr2/foldr3/foldr4/file1.sol"
      );
    case "get_file_path":
      return getFilePathFromArtifacts("Utility");
    default:
      break;
  }
};

/* eslint-disable no-console */
main()
  .then((val) => console.log(val))
  .catch((err) => console.error(err));
/* eslint-enable no-console */
