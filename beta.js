/*
+------------------------------------------------------------------------+
|                       0x Web3 Wallet Utility           
|               Web3 Account Wrapper for ERC20 & BEP20
|               Inspired by Viloid ( github.com/vsec7 )
|           Developed by Interchained ( github.com/shopglobal )       
|
+------------------------------------------------------------------------+
*/
//
// Global Variables
// Don't change these unless you know what you're doing.
// Most of the Global Variables are altered below in the
// functions, mainly createWallet/getBalance. Those calls
// switch networks according to wallet/account data.
// Altering variables could break something. DYOR first
// before using any of this software on main net 
//
var entropy = 'cat'; // set randomness to.....cat?
const test_address_default = ''; // dummy address generated for testing
const test_address = (test_address_default != undefined && test_address_default != '0xe5d18be87c0d69112cba1fd8571733dbae788377') ? test_address_default : '0xe5d18be87c0d69112cba1fd8571733dbae788377';
var addr_ = test_address; // address default set to test_address which is itself set by test_address_default variable unless left blank, which defaults to ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^. To alter test_address before the app runs adjust variable test_address_default
var address = (addr_ != undefined && addr_ === test_address_default) ? test_address_default : addr_;
const test_private_key = '0x2e07d5d42b1612377f5f7242579bfaf0dec0cb347ce3a487c964c723acf5bf82';
var pk_ = ''; // used to recover certain wallets based on private key, defaults to ^^^^^^^^^ if left blank. To alter pk_ before the app runs, adjust variable "test_private_key"
var privateKey = (pk_ != undefined && pk_ === test_private_key) ? test_private_key : pk_;
const zero = 0;
var balance = zero;
var erc20_balance = zero;
var bep20_balance = zero;
var test_seed = 'decorate photo client buzz work advice tongue record helmet weird virus panda';
var mnemonic_ = test_seed;
var seed = (mnemonic_ != undefined && mnemonic_ === test_seed) ? test_seed : mnemonic_;
var acc_ = '';
var holder = '';
var bep20_holder = '';
var erc20_holder = '';
var bep20_wallet = {};
var erc20_wallet = {};
var bep20Wallet;
var erc20Wallet;
//
// ETH utils && integrations
const ethutils = require('ethereum-mnemonic-privatekey-utils');
const bip39 = require('bip39');
const { Account } = require('eth-lib/lib');
//
// Inject packages 
const rl = require('readline-sync');
const fs = require('fs');
// BSC utils && integrations
const Web3 = require('web3');
// mainnet BSC
const bep_web3 = new Web3('https://bsc-dataseed1.binance.org:443');
// testnet BSC
// const bep_web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
// mainnet ETH
const erc_web3 = new Web3('https://mainnet.infura.io/v3/a60a84ebf4fe4290b094b75d9c383b7f');
// testnet ETH
// const erc_web3 = new Web3('https://rinkeby.infura.io/v3/a24f8ja84fea5fb79c3094eb46842d90');
var bep20 = false;
var erc20 = false;
var bsc = 'BSC';
var eth = 'ETH';
var eth_block = 0;
var bsc_block = 0;
var network = (erc20 == false) ? bsc : eth; 
var obj = (network != 'ETH') ? 'BSC' : 'ETH';
var web3_erc20 = new Web3(erc_web3);
var web3_bep20 = new Web3(bep_web3);
var web3;
web3_selector = function (obj,callback){
	network = obj;
	if(network == 'BSC'){
		bsc_block++;
        //console.log("web3_selector detected: "+ network);
		network = 'BSC';
		bep20 = true;
		erc20 = false;
        web3 = web3_bep20;
        web3.eth.getBlockNumber().then((result) => {
        	if(bsc_block<2){
        		console.log("Interacted with Binance Smart Chain on block: ",result);
	    	} else {
	    		console.log(" ");
	    	};
        	
    	});
    	// todo: you may want to verify this, but I 
    	// believe web3.eth.disconnect() would be 
    	// void due to a collission caused by a race
    	// between BSC and ETH networks since we 
    	// are calling multiple connections rapidly. 
    	// Maybe relocate web3.eth.disconnect(). Or,
    	// don't call web3.eth.disconnect() at all
    	// Here's the code: web3.eth.disconnect();
    };
    if(network != 'BSC') {
		eth_block++;
    	// console.log("web3_selector detected: "+network);
    	network = 'ETH';
    	bep20 = false;
    	erc20 = true;
    	web3 = web3_erc20;
    	web3.eth.getBlockNumber().then((result) => {
    		if(eth_block<2){
    		console.log("Interacted with Ethereum on block ",result);
	    	} else {
	    		console.log(" ");
	    	};
    	});
    	// web3.eth.disconnect();
	}; 
    callback(obj,"success");
}
//
// Assign Properties to Tokens for Users 
//
// ERC20 Token Address 
function ERC20Address(address,privateKey,balance,mnemonic,account) {
	this.address_ = Web3.utils.toChecksumAddress(address);
	this.privateKey_ = privateKey;
	this.balance_ = JSON.stringify(balance,null,"    ");
	this.mnemonic_ = mnemonic;
	this.account_ = JSON.stringify(account);
	this.pk_ = privateKey;
	console.log(this);
}
//
// BEP20 Token Address 
//
function BEP20Address(address,privateKey,balance,mnemonic,account){
	this.address = Web3.utils.toChecksumAddress(address);
	this.privateKey = privateKey;
	this.balance = JSON.stringify(balance,null,"    ");
	this.mnemonic = mnemonic;
	this.account = JSON.stringify(account);
	this.pk_ = privateKey;
	console.log(this);
};
//
// (prototype) Universal TokenAddress (UNI-FORM)
//
function TokenAddress(address,privateKey,balance,mnemonic,account){
	this.address = Web3.utils.toChecksumAddress(address);
	this.privateKey = privateKey;
	this.balance = JSON.stringify(balance,null,"    ");
	this.mnemonic = mnemonic;
	this.account = JSON.stringify(account);
	this.pk_ = privateKey;
	console.log(this);
};
//
// (prototype) Universal User (UNI-FORM)
//
function Web3Account(account,bep20Wallet,erc20Wallet){
  // detect (default) preferences based on 'account^'
  this.account = JSON.stringify(account); 
  // (prototype) 
  // todo, test, if account.address is undefined then set account -> bep20Wallet and (default) inherit bep20 properties 
  // 
  //   if(!account.address){
  //     account.network = 'BSC';
  //     account = bep20Wallet;
  //     account.address = Web3.utils.toChecksumAddress(bep20Wallet.address);
  //     account.privateKey = bep20Wallet.privateKey;
  //     account.balance = JSON.stringify(bep20Wallet.balance);
  //     account.address = bep20Wallet.mnemonic;
  //     account.account = JSON.stringify(bep20Wallet.account);
  //   } 
  // network (default) preference
	if (account.network != 'ETH'){
		account.network = 'BSC';
	} else {
		account.network = 'ETH';
	};
  // (prototype) account details: email, username, password 
  // todo, add encryption, maybe replace with Webnero code, refactor, or relocate.
	this.email= (account.email != ' ') ? account.email : account.username; ' ';
	this.username=  (account.username != ' ') ? account.username : account.email;
	this.pasword= (account.email != ' ') ? account.pasword : ' ';
  // (default) account details: address, private key, mnemonic, and balance
	this.address = Web3.utils.toChecksumAddress(account.address);
	this.privateKey = (account.privateKey != ' ') ? account.privateKey : ' ';
	this.pk_ = account.privateKey;
	this.balance = JSON.stringify(account.balance,null,"    ");
	this.mnemonic = account.mnemonic;
  // (ethereum) account details: address, private key, mnemonic, and balance
	this.eth_account = JSON.stringify(erc20Wallet.account);
	this.eth_address = Web3.utils.toChecksumAddress(erc20Wallet.address);
	this.eth_privateKey = (erc20Wallet.privateKey != ' ') ? erc20Wallet.privateKey : ' ';
	this.eth_balance = JSON.stringify(balance,null,"    ");
  // (binance smart chain) account details: address, private key, mnemonic, and balance
	this.bsc_account = JSON.stringify(bep20Wallet.account);
	this.bsc_address = Web3.utils.toChecksumAddress(bep20Wallet.address);
	this.bsc_privateKey = (bep20Wallet.privateKey != ' ') ? bep20Wallet.privateKey : ' ';
	this.bsc_balance = JSON.stringify(balance,null,"    ");
  // log this^ User 
	console.log(this);
};
//
// (prototype) ERC20 && BEP20 getBalance 
// combination simultaneous execution on ETH && BSC
// one call -> return balance(s) from both blockchains  
//
BEP20Address.prototype.getBalance = async function(erc20_wallet,erc20Wallet,bep20_wallet,bep20Wallet,network){
  var bsc='BSC';
  var eth='ETH';
	erc20_wallet = {
			address: Web3.utils.toChecksumAddress(bep20Wallet.vaddress),
			privateKey: erc20Wallet.privateKey,
			balance: JSON.stringify(erc20Wallet.balance),
			mnemonic: erc20Wallet.mnemonic,
			account: erc20Wallet.account
	};
	bep20_wallet = {
		address: Web3.utils.toChecksumAddress(bep20Wallet.vaddress),
		privateKey: bep20Wallet.privateKey,
		balance: JSON.stringify(bep20Wallet.balance),
		mnemonic: bep20Wallet.mnemonic,
		account: bep20Wallet.account
	};
	// ETH scan ERC20
	network = eth;
	var erc20_data;	
  	var erc20_balance;
	await web3_selector(network,function(err, res){
    erc20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(erc20Wallet.address)));
	  // console.log("Network selected via web3_selector: ",network);
    erc20Wallet.balance = erc20_balance;
	  erc20_wallet.balance = erc20_balance;
		erc20_data = `Balance: ${erc20Wallet.balance}\nAddress : ${erc20Wallet.address}\nPrivateKey: ${erc20Wallet.privateKey}\nMnemonic: ${erc20Wallet.mnemonic}\n`;
	});
	// BSC scan BEP20
	network = bsc;
	var bep20_data;
  	var bep20_balance;	
  	const bep20_erc20_data = '___________________________' + '\n' + bep20_data + '\n' + '___________________________' + '\n' + erc20_data;
	await web3_selector(network,function(err, res){
    bep20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(bep20Wallet.address)));
		// console.log("Network selected via web3_selector: ",network);
		bep20Wallet.balance = bep20_balance;
		bep20_wallet.balance = bep20_balance;
		bep20_data = `Balance: ${bep20Wallet.balance}\nAddress : ${bep20Wallet.address}\nPrivateKey: ${bep20Wallet.privateKey}\nMnemonic: ${bep20Wallet.mnemonic}\n`;
	});

	return bep20_erc20_data;
};
//
// ERC20 Wallet Handling
//
// check ERC20 account
//
ERC20Address.prototype.getBalance = async function(addr_,pk_,mnemonic_,acc_,erc20Wallet,erc20_wallet){
	erc20_wallet = {
		address: Web3.utils.toChecksumAddress(addr_),
		privateKey: pk_,
		balance: 0,
		mnemonic: mnemonic_,
		account: acc_
	}
	network = eth;
	await web3_selector(network,function(err, res){
		const erc20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(addr_)));
	    // console.log("Network selected via web3_selector: ",network);
	    erc20_wallet.balance = erc20_balance; 
		erc20Wallet.balance = erc20_balance;
	    erc20_wallet = erc20Wallet;
    
		return erc20Wallet;
	});
};
//
// BEP20 Wallet Handling
//
//check BEP20 balance
//
// add formatCoins()
BEP20Address.prototype.getBalance = async function(addr_,pk_,mnemonic_,acc_,bep20Wallet,bep20_wallet){
	bep20_wallet = {
		address: Web3.utils.toChecksumAddress(addr_),
		privateKey: pk_,
		balance: 0,
		mnemonic: mnemonic_,
		account: acc_
	}
	network = bsc;
	await web3_selector(network,function(err, res){
		const bep20_balance = JSON.stringify(web3.eth.getBalance(Web3.utils.toChecksumAddress(addr_)));
		// console.log("Network selected via web3_selector: ",network);
		bep20_wallet.balance = bep20_balance; 
		bep20Wallet.balance = bep20_balance; 
		bep20_wallet = bep20Wallet;
    
		return bep20Wallet;
	});
};
//
// web3WalletEngine - ERC20/BEP20 account handler 
// createWeb3Wallet - generator for ERC20 && BEP20 account(s)
// web3WalletBalance - retrieve ERC20 && BEP20 token balance for Web3 account(s)
//
	async function createWeb3Wallet(){
		const mnemonic = bip39.generateMnemonic();
		mnemonic_ = mnemonic;
		const pk = '0x' + ethutils.getPrivateKeyFromMnemonic(mnemonic);
		pk_ = pk;
		const acc = Account.fromPrivate(pk);
		acc_ = acc;
		addr_ = (acc.address).toLowerCase();
		bep20Wallet = new BEP20Address(addr_,pk_,0,mnemonic_,acc_);
		erc20Wallet = new ERC20Address(addr_,pk_,0,mnemonic_,acc_);
		return {
			'address': (acc.address).toLowerCase(), 
			'pk': pk,
			'mnemonic': mnemonic
		};
	};
	async function web3WalletEngine(n,o){
    // to do, authenticate
    // handle email, username, password
    // integrate to Webnero / Electronero Passport
    var logged_in = false;
		for (var i = 1; i <= n; i++) {
			// create 0x account
			const wallet = await createWeb3Wallet();
			const data = `Address : ${wallet.address}\nPrivateKey: ${wallet.pk}\nMnemonic: ${wallet.mnemonic}\n`;
				bep20_wallet = {
					address: Web3.utils.toChecksumAddress(addr_),
					privateKey: pk_,
					balance: 0,
					mnemonic: mnemonic_,
					account: acc_
				}
				erc20_wallet = {
					address: Web3.utils.toChecksumAddress(addr_),
					privateKey: pk_,
					balance: 0,
					mnemonic: mnemonic_,
					account: acc_
				}
		 	async function web3WalletBalance () {
		 		network = eth;
				await web3_selector(eth,function(err, res){
					ERC20Address.prototype.getBalance(addr_,pk_,mnemonic_,acc_,erc20Wallet,erc20_wallet);
					// console.log("Blockchain:  ",network);
				});
				network = bsc;
				await web3_selector(bsc,function(err, res){
					BEP20Address.prototype.getBalance(addr_,pk_,mnemonic_,acc_,bep20Wallet,bep20_wallet);
	     			// console.log("Blockchain: ",network);
				});       
				if(o){
					fs.appendFile(o, data+'\n', (err) => { if(err) console.log(err); });
				}; 
			}; web3WalletBalance();
		};		
	};
//
// Globalize Web3 Wallet Initialization
//
(async () => {
	console.log(`
/*
+------------------------------------------------------------------------+
|                       0x Web3 Wallet Utility           
|               Web3 Account Wrapper for ERC20 & BEP20
|               Inspired by Viloid ( github.com/vsec7 )
|           Developed by Interchained ( github.com/shopglobal )       
|
| Basic Usage:
| Get started with the 0x Wallet Utility by typing the amount of wallets 
| you would like to generate, then hit enter. To outpute the wallets to
| files simply type 'yes' and hit enter. 
+------------------------------------------------------------------------+
*/
		`)
	const n = rl.question('[?] How Many Wallets should we generate : ');
	const o = rl.question('[?] Would you like to output the wallets to a file : ');
	console.log('\n');
	await web3WalletEngine(n,o);
})();
