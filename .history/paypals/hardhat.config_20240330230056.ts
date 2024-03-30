import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.23",
  },
  networks: {
    // for test
    "mumbai": {
      url: process.env.POLYGON_MUMBAI,
      accounts:  [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: "hardhat",
};

export default config;
