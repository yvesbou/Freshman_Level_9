require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      },
      {
        version: "0.8.1"
      }
    ]},
  networks: {
    goerli: {
      chainId: 5,
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY
    },
  },
};
