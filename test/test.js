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
var erc20 = true;
var providers = (erc20 === true) ? erc_web3 : bep_web3;
var web3 = new Web3(providers);
web3.eth.getBlockNumber().then((result) => {
  if(erc20===true){
  	console.log("Latest Ethereum Block is ",result);
  } else {
  	console.log("Latest Binance Smart Chain Block is ",result);
  }
});
