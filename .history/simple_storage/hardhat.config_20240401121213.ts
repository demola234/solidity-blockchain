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
  },
  defaultNetwork: "hardhat",
};

export default config;
