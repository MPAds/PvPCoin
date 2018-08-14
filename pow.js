// Copyright (C) 2018 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.   7/30/18

// Each player has the ability to CPU mine coins at the end of each hand even if not played.

var cpuanswer = 0;

	function mineblock() {
	document.getElementById("stopBlockchain").style.display = 'none';
	document.getElementById("text").innerHTML = "CPU Mined: ";
	document.getElementById("CPU").innerHTML = "CPU REWARD: .2 COINS!";
	var Reward=.2;
    nonce = nonce + 1;
	nnonce++;
	data = 7 ;
	var myDate = new Date();                     // console.log(myDate);     // 2018-06-05T02:15:19.213Z
    timestamp = Math.round(+new Date()/1000);    // console.log(timestamp);  // 1528164919 this is seconds, not miliseconds
	hash = (index + data + timestamp + previoushash + nnonce + nonce + sum);  //	console.log("new hash number of Hash =", hash);  // = 780410548299 is the Genesis numeric for Genesis hash = b5b417f04b
	Hash = hash.toString(16);                    // console.log("New Hash =", Hash);  // New String of Number Hash = b5b417f04b
	block = {transaction: (transaction), timestamp: (timestamp), data: (data), Hash: (Hash), previoushash: (previoushash), nonce: (nonce+1), confirmed: (confirmed), playersWallet: (WalletAddress), PvPCoins: (Reward)}; // New Block Object
	blocks.push(block);
    previoushash = hash
	console.log(blocks);
    miningReward = (miningReward + Reward)  // console.log(miningReward);
  document.getElementById("unconfirmed").innerHTML = miningReward;
  document.getElementById("transactions").innerHTML = Hash;
  document.getElementById("rew").innerHTML = "You received " + Reward + " coins.";
  Reward = 0;
  data = 0 ;
  
    cpuanswer = block.PvPCoins;
	answer = cpuanswer + answer;
	document.getElementById("total").innerHTML = answer;
}

	//Is new block valid with prev block? Check index, and compare hash of previous block
	function isChainValid() {
		for(let validate=1; validate < this.blocks.length; validate++){
			const block = this.blocks[validate];
			const blocks = this.blocks[validate - 1];
			
	if (blocks.index+1 != block.index) {;
		console.log('invalid index');
		return false;
	}
	else if (blocks.Hash != block.previoushash) {;   // Im not sure if these 3 if statements are working
		console.log('invalid previoushash');
		return false;
	}
	else if (hash(block) != block.hash) {;
		return false;
	}
	}
	}



