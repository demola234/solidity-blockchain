require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers")
require("@nomicfoundation/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
