require("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { GOERLI_PRIVATE_KEY, INFURA_API_KEY } = process.env;

module.exports = {
  solidity: { compilers: [{ version: "0.8.0", }, { version: "0.8.9", }, { version: "0.6.6", }, { version: "0.6.0", settings: {}, }], },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}` ,
      accounts: [GOERLI_PRIVATE_KEY] ,
      gasPrice: 10000000000,
    } 
  }
};
