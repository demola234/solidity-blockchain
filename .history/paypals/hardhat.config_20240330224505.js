import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();




(
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
  }
);

