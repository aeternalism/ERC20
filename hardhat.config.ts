import { HardhatUserConfig, task } from 'hardhat/config';
import configEnv from './scripts/00_config_env';

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import "hardhat-gas-reporter";

const ROPSTEN_INFURA_ENDPOINT = process.env.ROPSTEN_INFURA_ENDPOINT;
const ROPSTEN_ACCOUNT_PRIVATE_KEY = process.env.ROPSTEN_ACCOUNT_PRIVATE_KEY;
const HOMESTEAD_INFURA_ENDPOINT = process.env.HOMESTEAD_INFURA_ENDPOINT;
const HOMESTEAD_ACCOUNT_PRIVATE_KEY = process.env.HOMESTEAD_ACCOUNT_PRIVATE_KEY;

const config : HardhatUserConfig = {
  defaultNetwork: configEnv.network,
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      chainId: 1337,
      url: 'http://127.0.0.1:8545',
    },
    ropsten: {
      chainId: 3,
      url: ROPSTEN_INFURA_ENDPOINT,
      accounts: [`0x${ROPSTEN_ACCOUNT_PRIVATE_KEY}`],
      loggingEnabled: true,
      gas: 'auto',
    },
    homestead: {
      chainId: 1,
      url: HOMESTEAD_INFURA_ENDPOINT,
      accounts: [`0x${HOMESTEAD_ACCOUNT_PRIVATE_KEY}`],
      loggingEnabled: true,
      gasPrice: 30000000000
    }
  },
  solidity: {
    version: '0.7.5',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: './contracts',
    tests: './test'
  },
  gasReporter: {
    currency: 'USD',
    enabled:  process.env.REPORT_GAS ? true : false
  }
}

export default config;
