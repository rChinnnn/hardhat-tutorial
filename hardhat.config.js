require("@nomicfoundation/hardhat-toolbox");

const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    local: {
      url: `http://127.0.0.1:8545/`,
      accounts: [PRIVATE_KEY]
    }
  }
};
