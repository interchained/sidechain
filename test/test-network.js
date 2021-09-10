/*
+-----------------------------------------------+
|         0x Wallet Generator & Recovery Tool
|                    ERC20 | BEP20
|        Crafted by Viloid ( github.com/vsec7 )
| Fork by Interchained ( github.com/shopglobal )|
+-----------------------------------------------+
*/
// BSC utils && integrations
const Web3 = require('web3');
// mainnet BSC
const bep_web3 = new Web3('https://bsc-dataseed1.binance.org:443');
// testnet BSC
//const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
// mainnet ETH
const erc_web3 = new Web3('https://mainnet.infura.io/v3/a60a84ebf4fe4290b094b75d9c383b7f');
// const infura_secret ='8fe50d6e617f4e40868d67a44ac88844';
// testnet ETH
//const web3 = new Web3('https://rinkeby.infura.io/v3/a60a84ebf4fe4290b094b75d9c383b7f');
var erc20 = false;
var bep20 = false;
var eth = 'ETH';
var bsc = 'BSC';
var web3_erc20 = new Web3(erc_web3);
var web3_bep20 = new Web3(bep_web3);
var web3;
web3_selector = function(network) {
	if(network != 'ETH'){
		bep20 = true;
		erc20 = false;
        web3 = web3_bep20;
        console.log("Blockchain Network: "+ network);
    } else if(network != 'BSC') {
    	bep20 = false;
    	erc20 = true;
    	web3 = web3_erc20;
    	console.log("Blockchain Network: "+network);
    };
    web3.eth.getBlockNumber().then((result) => {
    	if(network != 'BSC'){
    		console.log("Latest Ethereum Block is ",result);
    	} else {
    		console.log("Latest Binance Smart Chain Block is ",result);
    	}
    });
};
web3_selector(eth);
web3_selector(bsc);
