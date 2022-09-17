require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/b9da86fd16a84fe384ee95982cc5cb1d",
      accounts: ["863af8f61c968781cac3c7d567887693e0f114e3f9a917cbbfb10fbafa1e4c8b"]
    },
  }
};