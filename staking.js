// Copyright (C) 2018 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.   7/1/18

var check = 0;
var sofarsogood = 0;
var letsConfirm = [];
var staking = 0	
var spendable = 0
		
	sofarsogood = sofarsogood + 1;

function genesisCoins(){

	blockClone = blocks.slice(check);     //    make a clone of blocks     console.log("blocks:", blocks);   console.log("blockClone:", blockClone);
	letsConfirm.unshift(blockClone[0]);   //    console.log("letsConfirm:", letsConfirm);
	
	var lcHash = letsConfirm[0].Hash;            // Get Hash value from blockClone[] through letsConfirm[]
	var blHash = blocks[check].Hash;             // Get Hash value from block
	var blRewardvalue = blocks[check].PvPCoins;  // Get reward amount from block    console.log("lcHash:", lcHash);    console.log("blHash:", blHash);
		
	if (lcHash === blHash){
		blocks[check].confirmed = 1;      // 	console.log("They match!", );    	console.log("block confirmed = 1?", blocks[0].confirmed); REHASH BLOCK AS A LOCK? 
        spendable = spendable + blRewardvalue;  //  console.log("spendable", spendable);
		document.getElementById("spend").innerHTML = spendable;		
		blockClone.splice(0); // remove this block now from clone, now thats its confirmed
		check = check + 1;
		letsConfirm = [];     // console.log("Block Reward Value?", blRewardvalue);
		
//       spendable = spendable + blRewardvalue;  //  console.log("spendable", spendable);
//		document.getElementById("spend").innerHTML = spendable;
		
		 miningReward = (miningReward - blRewardvalue);
		 if (miningReward < 0){
		 miningReward = 0;  
		  }
         document.getElementById("unconfirmed").innerHTML = miningReward;
	}

}

function stakeCoins(){

	blockClone = blocks.slice(check);     //    make a clone of blocks     console.log("blocks:", blocks);   console.log("blockClone:", blockClone);
	letsConfirm.unshift(blockClone[0]);   //    console.log("letsConfirm:", letsConfirm);
	
	var lcHash = letsConfirm[0].Hash;            // Get Hash value from blockClone[] through letsConfirm[]
	var blHash = blocks[check].Hash;             // Get Hash value from block
	var blRewardvalue = blocks[check].PvPCoins;  // Get reward amount from block    console.log("lcHash:", lcHash);    console.log("blHash:", blHash);
		
	if (lcHash === blHash){
		blocks[check].confirmed = 1;      // 	console.log("They match!", );    	console.log("block confirmed = 1?", blocks[0].confirmed); REHASH BLOCK AS A LOCK?   
		blockClone.splice(0); // remove this block now from clone, now thats its confirmed
		check = check + 1;
		letsConfirm = [];     // console.log("Block Reward Value?", blRewardvalue);
		
        staking = staking + blRewardvalue;  //  console.log("staking", staking);
		document.getElementById("staking").innerHTML = staking;
		
		 miningReward = (miningReward - blRewardvalue);
		 if (miningReward < 0){
		 miningReward = 0;  
		  }
         document.getElementById("unconfirmed").innerHTML = miningReward;
	}

}

if (sofarsogood > 3){ stakeCoins() }    // How many hands to wait b4 starting to compare/confirm, wagers/blocks and start staking?
genesisCoins()


 function transferCoins(){
	 
	sofarsogood = sofarsogood + 1;
	if (sofarsogood > 3){                 //   How many hands to wait b4 starting to compare/confirm, wagers/blocks?

	blockClone = blocks.slice(check);     //    make a clone of blocks     console.log("blocks:", blocks);   console.log("blockClone:", blockClone);
	letsConfirm.unshift(blockClone[0]);   //    console.log("letsConfirm:", letsConfirm);
	
	var lcHash = letsConfirm[0].Hash;            // Get Hash value from blockClone[] through letsConfirm[]
	var blHash = blocks[check].Hash;             // Get Hash value from block
	var blRewardvalue = blocks[check].PvPCoins;  // Get reward amount from block    console.log("lcHash:", lcHash);    console.log("blHash:", blHash);
		
	if (lcHash === blHash){
		blocks[check].confirmed = 1;      // 	console.log("They match!", );    	console.log("block confirmed = 1?", blocks[0].confirmed); REHASH BLOCK AS A LOCK?   
		blockClone.splice(0); // remove this block now from clone, now thats its confirmed
		check = check + 1;
		letsConfirm = [];     // console.log("Block Reward Value?", blRewardvalue);
		
        staking = staking + blRewardvalue;  //  console.log("staking", staking);
		document.getElementById("staking").innerHTML = staking;
		
		 miningReward = (miningReward - blRewardvalue);
		 if (miningReward < 0){
		 miningReward = 0;  
		  }
         document.getElementById("unconfirmed").innerHTML = miningReward;
	}
	
	
 }
}