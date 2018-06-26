// Copyright (C) 2013 - 2018 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.   6/18/18

// var clone ="";
var check = 0;
var sofarsogood = 0;
var letsConfirm = [];
var spendable = 0	
		
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
		
        spendable = spendable + blRewardvalue;  //  console.log("spendable", spendable);
		document.getElementById("spendable").innerHTML = spendable;
		
		 miningReward = (miningReward - blRewardvalue);
		 if (miningReward < 0){
		 miningReward = 0;  
		  }
         document.getElementById("unconfirmed").innerHTML = miningReward;
	}
	
	
	
	//   Im not sure what to do yet if the blocks do not match. Not matching might mean block was hacked values changed
	//   I am thinking that I want to look for the matching hash a few blocks ahead nut if I don't find it then I am
	//   leaning towards sutracting the blRewardvalue from users totals. If this gets hooked up to server then JSON
	//   and allow a POW reward to miners who would hold the integrety hashes of blocks confirmed and re-hashed !!!
	//		else (letsConfirm[0] == blocks[1]){  // if hash doesnt match above look to the next block here [1]
	//		soFarSoGood = soFarSoGood + 1;
	//		else (letsConfirm[0] == blocks[2]){  // if hash doesnt match above look to the next block here [2]
	//		soFarSoGood = soFarSoGood + 1;
	//		else (letsConfirm[0] == blocks[3]){  // if hash doesnt match above look to the next block here [3]
	//		soFarSoGood = soFarSoGood + 1;
	//		else (document.getElementById("unconfirmed").innerHTML = miningReward - blRewardvalue;){
				
	//			blockClone.splice(0);
	//		}
	//	   }	
	//      }
	//    }
	
	
	
 }
}


// ---------------------------------------------------------------------------------------
// ------------------------ Code Above Is Good So Far ------------------------------------
// ---------------------------------------------------------------------------------------



