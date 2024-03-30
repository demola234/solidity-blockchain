

import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
  },
  networks: {
    // for mainnet
    'mumbai': {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY as string],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: 'hardhat',
};

export default config;