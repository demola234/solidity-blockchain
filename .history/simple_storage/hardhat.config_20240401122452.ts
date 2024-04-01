import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
  },
  networks: {
    // for test net
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 1000000000,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
      gasPrice: 1000000000,
    },
  },
  ethersa
  defaultNetwork: "hardhat",
};

export default config;
