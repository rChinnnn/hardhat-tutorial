require("@nomicfoundation/hardhat-toolbox");

const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    },
    local: {
      url: `http://127.0.0.1:8545/`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
