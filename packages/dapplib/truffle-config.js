require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan repeat pizza pudding hover kangaroo army gasp'; 
let testAccounts = [
"0x4b4dd746c42864293cb535b5ddc1a8c4fa8807b6bbbfbffdeff099a977bbfd3d",
"0x6274e4dcd377e7a7c4c5f78c53c88dfffcf8bb596a491aa1ae1b8e4d17a08679",
"0x560a8b8cc8edf61f8981329e09c9a7202907962c4270de2abf625d579d947bb3",
"0xd2e877ead831cd0ba62747f263fe272101df0137a23136b9e624d2608d66b124",
"0x593fdac38dee71edf9d8a86b5756f91c729c3b7be006e5cceac28212ae834e85",
"0x6ba197a363cacede6de5f8e607f8567e6851233f208f2a247bd0eeb6b6893454",
"0x761327d19b0a177e0484551d96d75fe3cd75bfb3d0141cddfa24ef07c4201e7a",
"0x853f647b7a66e56899ab3eb4e02642c2b60953c783fb11cfee9e6f9672b66441",
"0x9afc29c82aa8418b1e376111ad9bb9e1c7359233bb8ecfcbbb24f8f5cc1122c7",
"0x95682f055166de05180c068210d7430451f0b2be314ae5fd055c8416f289bc7f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

