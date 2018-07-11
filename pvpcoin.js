// Copyright (C) 2018 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.   6/8/18

// Take a look at line 44. The playersWallet is being a factor when the block is hashed for a new hash.
// The word 'sum' is the numeric value of players wallet from getIPwallet.js file.  7/1/18

//var data = 1882914879;                              // PLAYERvsPLAYER
//var timestamp = 1527633420;                         // Results for Tue May 29 22:37:00 2018 GMT
//var benchmark = 777000000000;                       // Random number I also wanted to use in hash
//var hash = (index + benchmark + timestamp + data);  // hash: 780410548299          console.log("hash:", hash );
//var genesisHash = hash.toString(16);                // genesisHash: b5b417f04b     console.log("genesisHash:", genesisHash );
//var genesisHash = hash.toString(32);                // genesisHash: mmq1fs2b


var hash=0;
var Hash=0;
var index=0;
var nonce=0;
var nnonce=0;
//var difficulty=2;
var Reward=.1000000000000000000;
var miningReward=0;
var totalCoins=0;
var maxCoins=777000000;
var blocks=[];                     // Array  ~ block or myblock or myBlock?  - numbers
var previoushash = 780410548299 ;  // Genesis Number Now Becomes Global For transaction()
var previousHash = 'b5b417f04b';   // Genesis Number Hashed into String   AKA Genesis Hash !!!
var miningRewardAddress=0;
var pendingTransactions=[];
var data = 1882914879;               // PLAYERvsPLAYER  -  Data becomes the amount wagered at the time of the wager, for each wager
var timestamp = 1527633420;          // Results for Tue May 29 22:37:00 2018 GMT
var benchmark = 777000000000;        // This is how I simply establish the first 3 digits of future hash's.
var confirmed = 0                    // 0 = no
var playersWallet = 0
var WalletAddress = 'bfbc0ipe';      // Genesis block of 7,777,000 will go to this address which is my address based on this code only
var difficulty = 7770000;

var block = {timestamp: "5/29/2018", data: "PLAYERvsPLAYER", Hash: "b5b417f04b", previousHash: "0", nonce: "", confirmed: (confirmed), playersWallet: (WalletAddress), PvPCoins: (7777000)}; // Genesis Block Object - strings text
blocks.push(block);


	function PVPCoinTransaction() {
    nonce = nonce + 1;
	var myDate = new Date();                     // console.log(myDate);     // 2018-06-05T02:15:19.213Z
    timestamp = Math.round(+new Date()/1000);    // console.log(timestamp);  // 1528164919 this is seconds, not miliseconds
	hash = (index + data + timestamp + previoushash + nnonce + nonce + sum);  //	console.log("new hash number of Hash =", hash);  // = 780410548299 is the Genesis numeric for Genesis hash = b5b417f04b
	Hash = hash.toString(16);                    // console.log("New Hash =", Hash);  // New String of Number Hash = b5b417f04b
	block = {timestamp: (timestamp), data: (data), Hash: (Hash), previoushash: (previoushash), nonce: (nonce+1), confirmed: (confirmed), playersWallet: (WalletAddress), PvPCoins: (Reward)}; // New Block Object
    blocks.push(block);
    previoushash = hash
	console.log(blocks);
  miningReward = (miningReward + Reward)
 // console.log(miningReward);
  document.getElementById("unconfirmed").innerHTML = miningReward;
  document.getElementById("transactions").innerHTML = Hash;
  document.getElementById("text").innerHTML = "You Mined Block: ";
  document.getElementById("rew").innerHTML = "You received .1 of a coin.";
  
//  mineblock(this.difficulty);
}

	function POW() {
    nonce = nonce + 1;
	var myDate = new Date();                     // console.log(myDate);     // 2018-06-05T02:15:19.213Z
    timestamp = Math.round(+new Date()/1000);    // console.log(timestamp);  // 1528164919 this is seconds, not miliseconds
	hash = (index + data + timestamp + previoushash + nnonce + nonce + sum);  //	console.log("new hash number of Hash =", hash);  // = 780410548299 is the Genesis numeric for Genesis hash = b5b417f04b
	Hash = hash.toString(16);                    // console.log("New Hash =", Hash);  // New String of Number Hash = b5b417f04b
	block = {timestamp: (timestamp), data: (data), Hash: (Hash), previoushash: (previoushash), nonce: (nonce+1), confirmed: (confirmed), playersWallet: (WalletAddress), PvPCoins: (Reward)}; // New Block Object
    blocks.push(block);
    previoushash = hash
	console.log(blocks);
  miningReward = (miningReward + Reward)
 // console.log(miningReward);
  document.getElementById("unconfirmed").innerHTML = miningReward;
  document.getElementById("transactions").innerHTML = Hash;
  document.getElementById("text").innerHTML = "POW Block: ";
  document.getElementById("rew").innerHTML = "You received .1 of a coin.";
//  mineblock(this.difficulty);
}


// 24 wagers per hand max, each wager producing their own block. The 24 blocks will be repackaged into one bigger block,
// sent to the server creating the main blockchain. So in essence there are two chains working. 
// POS will be used and total coin will never exceed 777,000,000. Staking stops once target total coin is reached.

// ---------------------------------------------------------------------------------------
// ------------------------ Code Above Is Good So Far ------------------------------------
// ---------------------------------------------------------------------------------------





