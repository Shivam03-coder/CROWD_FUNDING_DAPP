require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
module.exports = {
  solidity: "0.8.10",
  networks: {
    polygonzk: {
      url: process.env.NEXT_PUBLIC_RPC_URL,
      accounts: [process.env.NEXT_PUBLIC_PRIVATE_KEY],
    },
  },
};
