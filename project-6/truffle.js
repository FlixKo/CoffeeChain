const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = "april direct shine permit bicycle comic jeans device anxiety faith edit move";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b3ee980cc0c94fa1b2d0e6b7d20dd618");
      },
      network_id: "*" // Match any network id
    }
  }
};