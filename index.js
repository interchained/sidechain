const ethutils = require('ethereum-mnemonic-privatekey-utils');
const bip39 = require('bip39');
const { Account } = require('eth-lib/lib');
const rl = require('readline-sync')
const fs = require('fs')
/*
+-----------------------------------------+
| 	0x Wallet Generator & Recovery Tool
| Crafted by Viloid ( github.com/vsec7 )
| Fork by Interchained ( github.com/shopglobal )|
+-----------------------------------------+
*/
var mnemonic_ = '';
var pk_ = '';
var acc_ = '';
var addr_ = '';
var whale = '';
var devices = [{ device: 'eth0', Rx: { bytes: '491539402315', packets: '278178082' }, Tx: { bytes: '15113860013', packets: '67405143' } }, { device: 'lo', Rx: { bytes: '1653376107', packets: '6380792' }, Tx: { bytes: '1653376107', packets: '6380792' } }];
var targets = [{ whales: ["0x5dd4df3a1c0904d10acc20f4fd161bf68a5a4ed2","cat","whale","king","crypto", "moon"]}];
	function Address(mnemonic_,pk_,acc_,addr_,whale) {
		this.mnemonic_ = mnemonic_;
		this.privateKey_ = pk_;
		this.account_ =  JSON.stringify(acc_, null, "    ");
		this.address_ = addr_;
		this.whale = whale;
	}
	async function createWallet(){
		const mnemonic = bip39.generateMnemonic();
		mnemonic_ = mnemonic;
		const pk = '0x' + ethutils.getPrivateKeyFromMnemonic(mnemonic);
		pk_ = pk;
		const acc = Account.fromPrivate(pk);
		acc_ = acc;
		return {
			'address': (acc.address).toLowerCase(), 
			'pk': pk,
			'mnemonic': mnemonic
		}
	}
	async function generateWallet(n, o){
		for (var i = 1; i <= n; i++) {
		const wallet = await createWallet();
		const data = `Address : ${wallet.address}\nPrivateKey: ${wallet.pk}\nMnemonic: ${wallet.mnemonic}\n`;
		addr_ = wallet.address;
		Address.prototype.toString = function() {
			theAddress = new Address(mnemonic_, pk_, acc_, addr_, whale);
			console.log("\n"+"Address VVVVVVV"+"\n");
			console.log(theAddress);
			console.log("\n");
			const ret = 'Seed: ' + theAddress.mnemonic_ + '\n' + 'Private Key: ' + '\n'  + theAddress.privateKey_ + '\n' + ' Account: ' + theAddress.account_ + '\n' + 'Address: ' + theAddress.address_;
			console.log(ret);
			return ret;
		}
	 	function getIndex (addr_, whales) {
			if (addr_ === whales) {
				whale = true;
				Address.prototype.toString(mnemonic_, pk_,acc_,addr_,whale);
				console.log("name: " + whales);
				console.log("whales: " + whales);
				console.log(whales);
     			console.log("whales ahoy! "+"\n"+"WHALE: "+ whales);
			} else {
				whale = false;
	            Address.prototype.toString(mnemonic_, pk_,acc_,addr_,whale);
				return -1;
			}
			if(o){
			fs.appendFile( o, data+'\n', (err) => { if(err) throw err; });
			}
			//console.log(data);
		} 
		for (var j = 0; j < targets.length; ++j) {
			console.log("loading list: " + targets[j].whales); 
			getIndex(addr_, targets[j].whales);
		}
	}		
}
(async () => {
	console.log(`
+-----------------------------------------+
| 	0x Wallet Generator & Recovery Tool
| Crafted by Viloid ( github.com/vsec7 )
| Fork by Interchained ( github.com/shopglobal )|
+-----------------------------------------+
		`)
	const n = rl.question('[?] How Many Wallet: ');
	const o = rl.question('[?] Output (just enter if you dont need backup to file): ');
	console.log('\n');
	await generateWallet( n, o);
})();
