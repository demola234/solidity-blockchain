require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    mubai: {
      uri: process.env.POLYGON_MUMBAI,
      accounts: [ process.env.PRI],
    }
  },
  etherscan: {
    apiKey: ,
  }
};
