require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide gesture loan fortune taxi'; 
let testAccounts = [
"0xe7b1ed1d034e285ee287d0f868600111a97cc2e9c6cc7af6ae28b8c3c7b172ab",
"0xf414189e4e2d9c412e57081357fde03a5e848cfe2c89da776081146bf1ad733f",
"0xa61af2dbe7af327cf480ce733efa3511f5575306b6c23037e457460df7d07713",
"0x81ffa147c324c84664b17c8fb0754e102907fcb0721243111a63c2fcb38d2ac8",
"0xe51fe0ef0a2a4c89bf2e42e2f3b34018c9426523858e425e2c3fd46741a048db",
"0xe6b10d7b2aacc36fb929265f25227cd5c5645d87c1ea59ff11f8b94073fa0b25",
"0x705a7883398d90020be2ea31549f67b790ffd32ed0ce0df2d2a15b5822bf4482",
"0x037937175ed14dbe9447a0a2d8768986bd78360948283f7988cc4a00c0b88a69",
"0x6ad10a934df7c3507df2f5ce3a089b9a2ace35a55e050d61dff6dd8ad043b239",
"0xfb13f5e1a4a067271f190c07cf4596827a2043a6971f887966304b7997388f4d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

