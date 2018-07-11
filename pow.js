function mineblock(difficulty){
	while(this.Hash.substring(0, difficulty) !== Array(difficulty +1).join("0")){
		this.nnonce++;
		data = 777 ;
		this.Hash = this.POW();
		while (false);
		var powhash = 0
		powhash = this.Hash
		console.log("Block Mined:", powhash);
	}
}


// this is a run away train, lol. It works with the var difficulty found on pvpcoin.js page. I had to set the dif high
// in order to slow it down. Part of the problem here too though is that the game state doesnt interact correctly
// with the dom if I call the function after and id is suppose to be updated and displayed. Oh well, it was fun for
// now and will look at it again in the future or maybe canada can hanle it, lol.