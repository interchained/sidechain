# Interchained | <b>SideChained</b> === <i>(Web3 + (0x + Altcoin) </i> 
Designed, developed, and open-sourced by Interchained ----> Connect with Interchained on Telegram at https://t.me/interchained  </br>
Made possible by Electronero Network Project ----> join Electronero Network Board Room at https://t.me/electronero </br>
Interchained, as in interoperable blockchains.</br>
SideChained is a NodeJS based portable, interoperable, "cross-chain" ledger utlility which enables simultaneous or exclusive transaction support for ERC20/BEP20/COINS. Sidechain Web3 Support for 0x (BSC/ETH) && native support for Cryptonote out of the box. SideChained is based on a combination of two main components. SideChained open source package, and Electronero Passport, a Private API on server interacting with wallets. SideChained is portable. Enable cross-chain swaps & simultaneous transactions between ERC20, BEP20, and COINS. Web Server Public/Private API coming soon! Stay tuned! 
___________________________________________
- [x] Web3 wallet create -> 'createWeb3Wallet' to generate Web3 wallets on cli, or server
- [x] Web3 wallet recover -> 'recoverWeb3Wallet' (to be merged from #1987 in future release)
- [x] Web3 wallet monitor -> 'web3WalletBalance' to retrieve ETH/ERC20 & BSC/BEP20 balance information 
- [x] Web3 wallet engine -> 'web3WalletEngine' to instantiate Web3 wallet through generate or recovery strategies, process ETH/ERC20 or BSC/BEP20 function calls, and transactions simultaneously or selectively. 
- [x] built-in Web3 "network selector function" to seamlessly process ETH/ERC20 swithing 
- [x] process ETH/ERC20 and/or BSC/BEP20 transactions simultaneously or selectively. 
- [x] custom properties tracking to identify unique details for each BEP20 and/or ERC20 account(s)
- [x] separate command-line utility, and web applications 
- [x] compatibile with ERC20 & BEP20
- [x] support multiple blockchain transaction types
- [x] increase interoperability between ETH & BSC blockchains 
- [x] support ERC20/BEP20 tokens
- [x] compatibile with coins (See Coin Compatibility list below)
- [ ] create Web Server Public/Private API
- [ ] 
- [ ] enable cross-chain swaps: ERC20 to BEP20, BEP20 to ERC20, ERC20/BEP20 to coins, coins to ERC20/BEP20
- [ ] Electronero Passport API integration
- [ ] user account handling
- [ ] Polkadot token integrations 
- [ ] Tron token integrations 
- [ ] XMR/Cryptonote coin integrations
- [ ] BTC/LTC/DASH/ coin integrations

# Development Roadmap
Web3 | ERC20 | BEP20 | Altcoin | Public/Private API | Cross-Chain Swaps 
------------ | ------------- | ------------- | ------------- | -------------| ------------- 
:heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: | :x:
Integrate Web3 | Integrate ERC20 account(s) | Integrate BEP20 account(s) | Integrate altcoin account(s) | Integrate Public/Private API | Integrate cross-chain swap(s)
 
# Cryptocurrency Support Roadmap
Identifier | Currency | Environment | Production Status 
------------ | ------------- | ------------- | ------------- 
ETH | Ethereum | Account | :heavy_check_mark: in Production 
BSC | Binance Smart Chain | Account | :heavy_check_mark: in Production 
DOT | Polkadot | Account | :x: (in Testnet**)
ETNX | Electronero | Account | :heavy_check_mark: in Production
ETNXP | Electronero Pulse | Account | :heavy_check_mark: in Production
LTNX | Litenero | Account | :heavy_check_mark: in Production
GLDX | Goldnero | Account | :heavy_check_mark: in Production
CRFI | Crystaleum | Account | :heavy_check_mark: in Production
XMR | Monero | Account | :heavy_check_mark: in Production
XLM	|	XLM	|	Account	|	:x: (in Testnet**)
TRX	|	TRON	|	Account	|	:x: (in Testnet**)
BTC	|	Bitcoin	| UTXO-based	| :x: (in Testnet**)
BCH	|	Bitcoin Cash	| UTXO-based |	:x: (in Testnet**)
BTG	|	Bitcoin Gold	|	UTXO-based	| :x: (in Testnet**)
DASH |	Dash |	UTXO-based	| :x: (in Testnet**)
LTC	|	Litecoin	|	UTXO-based	| :x: (in Testnet**)
ZEC	|	Zcash	|	UTXO-based	| :x: (in Testnet**)
<p>&nbsp;</p>
**Testnet currency is not available to the main repository.

## Command-line + Server utilities for handling Ethereum + Binance Smart Chain account(s)
Easy handling of ERC20/BEP20 tokens. For use with tokenized Electronero assets, or for integration Ethereum &amp; Binance Smart Chain into Webnero or Electronero Passport utilities. The module contained in this repository consists of example script(s) and a package.json which contains additional utilities we use for handling ERC20/BEP20 within NodeJS. It could be modified to be used with any project. This repository is the host for the Electronero Project. So feel free to fork your own version, and for any features you would like to share with the community just submit a pull request and it will be merged within reasonable time by one of the maintainers. 

# Requirements
- NodeJS <a href='https://nodejs.org/en/'><img src='https://nodejs.org/static/images/logo.svg' width="3%" height="3%"><a/>, NPM <a href='https://www.npmjs.com/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1080px-Npm-logo.svg.png' width="5%" height="5%"></a>
- A Web3 <a href='https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/> connection to ETH and BSC (Need help? See Getting Started with Web3 below)
- Infura <a href='https://infura.io/dashboard/ethereum'><img src='https://i.ibb.co/kB3LMss/infura.png' width="3%" height="3%"><a/> API Key (for interaction with ETH/ERC20)
- Some NodeJS, server administration, and blockchain knowledge is required for production usage. At least proper firewalls, data security, decimal precision handling would be necessary for production deployments.

# Installation 
- Make sure NodeJS/NPM are installed.
- Be (or GO GET) familiar with NodeJS <a href='https://nodejs.org/en/'><img src='https://nodejs.org/static/images/logo.svg' width="5%" height="5%"><a/>, Web3 (see below: Getting Started with Web3) <a href='https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="5%" height="5%"><a/>, and Webpack (see below: Getting Started with Webpack) <a href='https://infura.io/dashboard/ethereum'><img src='https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png' width="5%" height="5%"><a/>.
- Install packages ```npm i``` 

# Getting Started
The 0x* addresses that interchained-web3-0x generates are specifically for use on ETH/BSC blockchains.
Public address, Private keys, and Mnemonic are generated. 
<p>&nbsp;</p>
### interchained-web3-0x-cli 
Access interchained-web3-0x utility with command ```node interchained-web3-0x-cli.js```
You'll be prompted to enter the amount of 0x addresses you would like to generate. 
<p>&nbsp;</p>
### interchained-web3-0x-server (soon)
Spin up a headless interchained-web3-0x web server node in one-line with command ```node bin/www/interchained-web3-0x-server.js 8080```
...or use package scripts:  ```npm run server```
...or add a flag to interchained-web3-0x-cli  on startup ```--server 8080``` to  interchained-web3-0x
ex. ```node interchained-web3-0x-cli.js --server 8080``` 
Close all headless interchained nodes command: ```npm run disconnect```
Default web server runs on port 8080.

<a href='https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js'><img src='https://i.ibb.co/JRKWz3M/20201031-5f9db5f2c9f7e.jpg' width="60%" height="60%"><a/> 
<p>&nbsp;</p>
# Getting Started with Web3 <a href='https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/>
web3.js is a javascript library that allows our client-side application to talk to the blockchain. We configure Web3 <a href=''><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/>to communicate via Infura(ETH), or Binance(BSC).
 <p>&nbsp;</p>
Web3 <a href='https://infura.io/dashboard/ethereum'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/> can be obtained through NPM, and connections to ETH / BSC blockchain can be established through public/private channels.
<p>&nbsp;</p>
Web3 <a href='https://infura.io/dashboard/ethereum'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/> NPM: https://www.npmjs.com/package/web3
 <p>&nbsp;</p>
Web3 <a href='https://infura.io/dashboard/ethereum'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/> DOCS: https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js
Installing Web3 is as easy as ```npm i web3 --save```
 <p>&nbsp;</p>
Then in the app require Web3 ```const Web3 = require('web3');```
<p>&nbsp;</p>

## Establish Web3 <a href='https://web3js.readthedocs.io/en/v1.2.2/getting-started.html#adding-web3-js'><img src='https://s3.amazonaws.com/infura-blog-content/2021/05/pasted-image-0--40-.png' width="3%" height="3%"><a/> Connection to ETH blockchain with Infura <a href='https://infura.io/dashboard/ethereum'><img src='https://i.ibb.co/kB3LMss/infura.png' width="3%" height="3%"><a/>
 <p>&nbsp;</p>
To get started quickly we establish a Web3 connection to ETH network via an Infura <a href='https://infura.io/dashboard/ethereum'><img src='https://i.ibb.co/kB3LMss/infura.png' width="3%" height="3%"><a/> API key to use for ERC20 blockchain calls:
https://infura.io/docs/ethereum#section/Make-Requests
https://blog.infura.io/getting-started-with-infuras-ethereum-api/
<p>&nbsp;</p>
Since we required Web3 now we can access Web3 in Interchained, and established a connection to ETH blockchain with Infura. 
 `Remember to personalize mainnet/testnet Infura API keys. Replace "MAINNET_INFURA_API_KEY" or TESTNET_INFURA_API_KEY"'
```
// mainnet ETH
const eth_web3 = new Web3('https://mainnet.infura.io/v3/MAINNET_INFURA_API_KEY');
// testnet ETH
const eth_web3 = new Web3('https://rinkeby.infura.io/v3/TESTNET_INFURA_API_KEY');
```
Now that ETH is initialized in Interchained, let's prepare to to connect with BSC blockchain.

## Establish Web3 Connection to Binance Smart Chain directly through Binance 
To get started quickly we'll establish a Web3 connection to BSC network to use for BEP20 calls:
https://docs.binance.org/smart-chain/developer/create-wallet.html
https://docs.binance.org/smart-chain/guides/bsc-intro.html
<p>&nbsp;</p>
Following along the steps, at this stage we are ready to proceed with BSC. Ok will establish a connection to BSC blockchain directly. 
```
// mainnet BSC
const bsc_web3 = new Web3('https://bsc-dataseed1.binance.org:443');
// testnet BSC
const bsc_web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
```
# Optional, recompile from source for web with Webpack 
<a href=''><img src='https://i.ibb.co/Rp1RgXK/Fire-Shot-Capture-052-webpack-webpack-js-org.png' width="50%" height="50%"><a/> 
# Getting Started with Webpack 
Webpack is ...
`Here are some helpful links to get started with Webpack. 
[Home] https://webpack.js.org/
 <p>&nbsp;</p>
[WebPack Documentation] https://webpack.js.org/concepts/
 <p>&nbsp;</p>
[CreateApp | Create Webpack Config (online)] https://createapp.dev/webpack`
<p>&nbsp;</p>
 
# Donate
## Electronero Network Project Exchange Listing Fund!
 Bonus coins are available to qualifying donors. See below for details. To donate now select an address below, and message @_electronero on Twitter (https://twitter.com/_electronero) to claim your bonus. Twitter @_electronero are the only authorized Electronero core members authorized to accept donations for the listing fund, and distribute bonus free coins. Don't accept any private messages from anyone claiming to be members of Electronero project. Only https://twitter.com/_electronero is the official @_electronero twitter page. 
 
 ### Eligible donors receive Free Gift, Bonus Coins of up to 10x donation value. See below for details. 
 Bonus free coins are distributed in the donors choice of Electronero Network coins in any combination: ETNX, ETNXP, LTNX, GLDX, or CRFI. 
 Bonus coins are free ETNX, ETNXP, LTNX, GLDX, or CRFI coins made available through the official listing fund coin pool. Bonus free coins from 1.5x multiplier all the way up to 10x multipliers are available for donations over $150 value in any digital currency. 

Donate ₮1000 to the Electronero Project Exchange Listing Fund, and receive a free gift. 
A ₮2000 bonus in ETNX, ENTXP, LTNX, GLDX, or CRFI coins

Bonus free coins are multiplied based on your donation! 

```
Donate over ₮150 to receive 1.5x free bonus coins.
Donate over ₮1000 to receive 2x free bonus coins.
Donate over ₮2500 to receive 2.5x free bonus coins.
Donate over ₮3000 to receive 3x free bonus coins.
Donate over ₮5000 to receive 5x free bonus coins.
Donate over ₮10,000 to receive 10x free bonus coins.
```

### Example: Donate ₮1000, and receive ₮2000 free bonus coins in ETNX, ENTXP, LTNX, GLDx, or CRFI.

## Official Donation Addresses:

LTC: `MAtV7sbBnmuf2bxVUPgCprpmJ5xX6euBwe`

BTC: `38jiBKevQHp8zhQpZ42bTvK4QpzzqWkA3K`

DOGE: `DTTez7ggKPzDcKuUUTns8VzMrKesZUKMCk`

DASH: `XcFVDo2k3XRJwQKQQRgMBfhCEDFANawQ3B`

ETH: `0x59d26980a1cdd75e1c3af516b912a6233aa2f5e4`

USDt: `0x59d26980a1cdd75e1c3af516b912a6233aa2f5e4`

XMR: `85PTaJNpkEEeJao2MNk1sRWTQXLUf1FGjZew8oR8R4cRUrXxFrTexa9GwrjmJD4Pyx6UrjgMQnuMoFNmaBKqxs7PPXVe9oX`

### Thank you 

```
 To donate other coins not mentioned above message @_electronero on Twitter (https://twitter.com/_electronero directly.
 No KYC, and no personal information is necessary to claim bonus free coins. 
 
 To claim bonus free coins simply message @_electronero on Twitter (https://twitter.com/_electronero) 
 Include the following proof of spend in your message to track coins/tokens donated.
• coin symbol
• amount of coins donated
• transaction ID 
• screenshot of withdrawal from your wallet
```


