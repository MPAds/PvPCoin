

// Copyright (C) 2013-2014 EdwardNolan, Lakewood OH 44107, nolanedward@sbcglobal.net
// All rights reserved.

money = 2000;
var bet = 0, rand;
var pot = 0;
var wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1, wC = 1, wH = 1, wS = 1, wD = 1;
x = 0, toteAce = 0, toteTwo = 0, toteThree = 0, toteFour = 0, toteFive = 0, toteSix = 0, toteSeven = 0, toteEight = 0, toteNine = 0, toteTen = 0, toteJack = 0, toteQueen = 0, toteKing = 0, toteSpade = 0, toteHeart = 0, toteClub = 0, toteDiam = 0;
var wager = 0;

var basePath = "";  // Root folder.
bannerOne()		
function imgRandom() {
document.getElementById("getready").style.display = 'none';
groups = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // A,2,3,4,5,6,7,8,9,10,J,Q,K,S,H,C,D
var imgArray = ["images/aceclub.png", "images/aceheart.png", "images/acespade.png", "images/acediam.png", "images/twoclub.png", "images/twoheart.png", "images/twospade.png", "images/twodiam.png",
             "images/threeclub.png", "images/threeheart.png", "images/threespade.png", "images/threediam.png", "images/fourclub.png", "images/fourheart.png", "images/fourspade.png", "images/fourdiam.png", 
             "images/fiveclub.png", "images/fiveheart.png", "images/fivespade.png", "images/fivediam.png", "images/sixclub.png", "images/sixheart.png", "images/sixspade.png", "images/sixdiam.png", 
             "images/sevenclub.png", "images/sevenheart.png", "images/sevenspade.png", "images/sevendiam.png", "images/eightclub.png", "images/eightheart.png", "images/eightspade.png", "images/eightdiam.png", 
             "images/nineclub.png", "images/nineheart.png", "images/ninespade.png", "images/ninediam.png", "images/tenclub.png", "images/tenheart.png", "images/tenspade.png", "images/tendiam.png",
             "images/jackclub.png", "images/jackheart.png", "images/jackspade.png", "images/jackdiam.png", "images/queenclub.png", "images/queenheart.png", "images/queenspade.png", "images/queendiam.png",
             "images/kingclub.png", "images/kingheart.png", "images/kingspade.png", "images/kingdiam.png"];
var clone = imgArray.slice(0);  //  make a clone of imgArray
for (i = 0; i < 9; i++) {  
    var i, image;
    var shownImages = []; // clear array at end of round  when reread
	  pickCard()
      subRoutine()					
                        }
						
      count = 0;
    function liveCount() {
      count += 1
//      banners()
      bannerOne()

      countdown()
      // -- End Display Last 5 Seconds Below --
//      document.getElementById("lock").style.display = 'none';
	  pickCard()
      checkWagers()
      resetTote()
      subRoutine()
         if (count == 28) {    //  There are a total of 28 turns, and 37 cards in play
		     document.getElementById("message").style.display = 'block';
			 document.getElementById("message").innerHTML = "Next Round Within 100 Seconds!!!";
			 document.getElementById("getready").style.display = 'block';
                          }
         if (count == 29) {    //  There are a total of 28 turns, and 37 cards in play
		     document.getElementById("message").style.display = 'none';
             document.getElementById('guess').innerHTML = ""; // remove all the elements-child nodes from dom
//			 document.getElementById("getready").style.display = 'none';
             setTimeout(imgRandom,3000); // restart in 3 seconds to give stall time to complete
		 return;
                          } 					  
		setTimeout(liveCount, 50000); // only if count < 29 will this setup the next call in 50 second. 
                            }
							
	setTimeout(liveCount,50000);  // calls liveCount once in 50 seconds -- Main Game Timer --
	  
function pickCard() {
        var randIndex = Math.floor(Math.random() * clone.length);  
        rand = clone[randIndex];
        image = new Image();
        image.src = basePath + rand;
        shownImages.push(rand);
        document.getElementById("guess").appendChild(image);
        clone.splice(randIndex,1);
                             }

}  // This ends imgRandom and the round

//banners()
bannerOne()

updateStatus()
imgRandom()


// ----------------  all the functions are below ----------------------------------

function subRoutine() {
hearts()
clubs()
diamonds()
spades()
figureOdds()
compareOdds()
overround()
countdown()
}

function bannerOne() {
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
 {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
     {
var jsonData = JSON.parse(xmlhttp.responseText) // json.parse returns array
	{
		var img = document.createElement('img'); // element to hold image
		
function oneArrayItem() {
  var firstArrayItem = jsonData[0];{  // banner_link , banner_image_url
    link =(firstArrayItem.banner_link);
    src =(firstArrayItem.banner_image_url);
	document.getElementById("b1").innerHTML =('<a target="_blank" href="'+link+'"><IMG SRC="..//upload/'+src+'" border=0 width="200" height="30"><\/a>');	
  }
}
oneArrayItem()

function twoArrayItem() {
  var secondArrayItem = jsonData[1];{
    link =(secondArrayItem.banner_link);
    src =(secondArrayItem.banner_image_url);
	document.getElementById("b2").innerHTML =('<a target="_blank" href="'+link+'"><IMG SRC="..//upload/'+src+'" border=0 width="200" height="30"><\/a>');	
  }
}
twoArrayItem()

function threeArrayItem() {
  var thirdArrayItem = jsonData[2];{
    link =(thirdArrayItem.banner_link);
    src =(thirdArrayItem.banner_image_url);
	document.getElementById("b3").innerHTML =('<a target="_blank" href="'+link+'"><IMG SRC="..//upload/'+src+'" border=0 width="200" height="30"><\/a>');	
  }
}
threeArrayItem()

function fourArrayItem() {
  var fourthArrayItem = jsonData[3];{
    link =(fourthArrayItem.banner_link);
    src =(fourthArrayItem.banner_image_url);
	document.getElementById("b4").innerHTML =('<a target="_blank" href="'+link+'"><IMG SRC="..//upload/'+src+'" border=0 width="200" height="30"><\/a>');	
  }
}
fourArrayItem()

function fiveArrayItem() {
  var fifthArrayItem = jsonData[4];{
    link =(fifthArrayItem.banner_link);
    src =(fifthArrayItem.banner_image_url);
//	  console.log(fifthArrayItem.banner_link);
//    console.log(fifthArrayItem.banner_image_url);
	document.getElementById("b5").innerHTML =('<a target="_blank" href="'+link+'"><IMG SRC="..//upload/'+src+'" border=0 width="200" height="30"><\/a>');	
  }
}
fiveArrayItem()

function sixArrayItem() {
  var sixthArrayItem = jsonData[5];{
    link =(sixthArrayItem.banner_link);
    src =(sixthArrayItem.banner_image_url);
	document.getElementById("b6").innerHTML =('<a target="_blank" href="'+link+'"><IMG SRC="..//upload/'+src+'" border=0 width="200" height="30"><\/a>');	
  }
}
sixArrayItem()


//	{ banner_id: "8", banner_link: "http://www.shareasale.com/r.cfm?b=594819&u=671906&m=51119&urllink=&afftrack=", banner_image_url: "buybluesteel_com.png", views: "0", clicks: "0" }	
//  console.log(fifthArrayItem);
//	console.log(xmlhttp.responseText)
//	console.log(jsonData);
                                                 }
      }
  }
xmlhttp.open("GET","banners.php",true);
xmlhttp.send();
}



function hearts() {
               if (( rand == "images/aceheart.png") || ( rand == "images/twoheart.png") || ( rand == "images/threeheart.png") || ( rand == "images/fourheart.png") || ( rand == "images/fiveheart.png") || ( rand == "images/sixheart.png") || ( rand == "images/sevenheart.png") || ( rand == "images/eightheart.png") || ( rand == "images/nineheart.png") || ( rand == "images/tenheart.png") || ( rand == "images/jackheart.png") || ( rand == "images/queenheart.png") || ( rand == "images/kingheart.png"))
			  {   groups[14] += 1; }
			  }
			  
function clubs() {
               if (( rand == "images/aceclub.png") || ( rand == "images/twoclub.png") || ( rand == "images/threeclub.png") || ( rand == "images/fourclub.png") || ( rand == "images/fiveclub.png") || ( rand == "images/sixclub.png") || ( rand == "images/sevenclub.png") || ( rand == "images/eightclub.png") || ( rand == "images/nineclub.png") || ( rand == "images/tenclub.png") || ( rand == "images/jackclub.png") || ( rand == "images/queenclub.png") || ( rand == "images/kingclub.png"))
			  {   groups[15] += 1; }
			  }
			  
function diamonds(){
               if (( rand == "images/acediam.png") || ( rand == "images/twodiam.png") || ( rand == "images/threediam.png") || ( rand == "images/fourdiam.png") || ( rand == "images/fivediam.png") || ( rand == "images/sixdiam.png") || ( rand == "images/sevendiam.png") || ( rand == "images/eightdiam.png") || ( rand == "images/ninediam.png") || ( rand == "images/tendiam.png") || ( rand == "images/jackdiam.png") || ( rand == "images/queendiam.png") || ( rand == "images/kingdiam.png"))
			  {   groups[16] += 1; }
			  }
			  
function spades(){
			   if (( rand == "images/acespade.png") || ( rand == "images/twospade.png") || ( rand == "images/threespade.png") || ( rand == "images/fourspade.png") || ( rand == "images/fivespade.png") || ( rand == "images/sixspade.png") || ( rand == "images/sevenspade.png") || ( rand == "images/eightspade.png") || ( rand == "images/ninespade.png") || ( rand == "images/tenspade.png") || ( rand == "images/jackspade.png") || ( rand == "images/queenspade.png") || ( rand == "images/kingspade.png"))
			  {   groups[13] += 1; }
			  }

function figureOdds() {   //   Get Card Counts

               if (( rand == "images/aceclub.png") || ( rand == "images/aceheart.png") || ( rand == "images/acespade.png") || ( rand == "images/acediam.png"))
              {  groups[0] += 1; }

               else if (( rand == "images/twoclub.png") || ( rand == "images/twoheart.png") || ( rand == "images/twospade.png") || ( rand == "images/twodiam.png"))
              {  groups[1] += 1; }

               else if (( rand == "images/threeclub.png") || ( rand == "images/threeheart.png") || ( rand == "images/threespade.png") || ( rand == "images/threediam.png"))
              {  groups[2] += 1; }

               else if (( rand == "images/fourclub.png") || ( rand == "images/fourheart.png") || ( rand == "images/fourspade.png") || ( rand == "images/fourdiam.png"))
              {  groups[3] += 1; }

               else if (( rand == "images/fiveclub.png") || ( rand == "images/fiveheart.png") || ( rand == "images/fivespade.png") || ( rand == "images/fivediam.png"))
              {  groups[4] += 1; }

               else if (( rand == "images/sixclub.png") || ( rand == "images/sixheart.png") || ( rand == "images/sixspade.png") || ( rand == "images/sixdiam.png"))
              {  groups[5] += 1; }

               else if (( rand == "images/sevenclub.png") || ( rand == "images/sevenheart.png") || ( rand == "images/sevenspade.png") || ( rand == "images/sevendiam.png"))
              {  groups[6] += 1; }

               else if (( rand == "images/eightclub.png") || ( rand == "images/eightheart.png") || ( rand == "images/eightspade.png") || ( rand == "images/eightdiam.png"))
              {  groups[7] += 1; }

               else if (( rand == "images/nineclub.png") || ( rand == "images/nineheart.png") || ( rand == "images/ninespade.png") || ( rand == "images/ninediam.png"))
              {  groups[8] += 1; }

               else if (( rand == "images/tenclub.png") || ( rand == "images/tenheart.png") || ( rand == "images/tenspade.png") || ( rand == "images/tendiam.png"))
              {  groups[9] += 1; }

               else if (( rand == "images/jackclub.png") || ( rand == "images/jackheart.png") || ( rand == "images/jackspade.png") || ( rand == "images/jackdiam.png"))
              {  groups[10] += 1; }

               else if (( rand == "images/queenclub.png") || ( rand == "images/queenheart.png") || ( rand == "images/queenspade.png") || ( rand == "images/queendiam.png"))
              {  groups[11] += 1; }

               else if (( rand == "images/kingclub.png") || ( rand == "images/kingheart.png") || ( rand == "images/kingspade.png") || ( rand == "images/kingdiam.png"))
              {   groups[12] += 1; }			  
}

function compareOdds() {
// ----- Ace
acerandomnumber=Math.floor(Math.random()*8+1)
             if (groups[0] == 0) {                //10:1     groups[0] += 1;
                document.getElementById("odds1").innerHTML = acerandomnumber + ":1";
			    document.getElementById("aces").innerHTML ="0 of 4";
                                  }

             if (groups[0] == 1) {                //14:1
                document.getElementById("odds1").innerHTML = acerandomnumber + ":1";
				document.getElementById("aces").innerHTML ="1 of 4";
                                  }

             if (groups[0] == 2) {                //21:1
                document.getElementById("odds1").innerHTML = acerandomnumber + ":1";
				document.getElementById("aces").innerHTML ="2 of 4";
                                  }

             if (groups[0] == 3) {                //43:1
                document.getElementById("odds1").innerHTML = acerandomnumber + ":1";
				document.getElementById("aces").innerHTML ="3 of 4";
                                  }

             if (groups[0] == 4) {                //0:0
                document.getElementById("odds1").innerHTML = "0:0";
                document.getElementById("aces").innerHTML ="4 of 4";
                                  }
// ----- Two
tworandomnumber=Math.floor(Math.random()*13+1)
             if (groups[1] == 0) {                //10:1     groups[1] += 1;
                document.getElementById("odds2").innerHTML = tworandomnumber + ":1";
				document.getElementById("twos").innerHTML ="0 of 4";
                                  }

             if (groups[1] == 1) {                //14:1
                document.getElementById("odds2").innerHTML = tworandomnumber + ":1";
				document.getElementById("twos").innerHTML ="1 of 4";
                                  }

             if (groups[1] == 2) {                //21:1
                document.getElementById("odds2").innerHTML = tworandomnumber + ":1";
				document.getElementById("twos").innerHTML ="2 of 4";
                                  }

             if (groups[1] == 3) {                //43:1
                document.getElementById("odds2").innerHTML = tworandomnumber + ":1";
				document.getElementById("twos").innerHTML ="3 of 4";
                                  }

             if (groups[1] == 4) {                //0:0
                document.getElementById("odds2").innerHTML = "0:0";
				document.getElementById("twos").innerHTML ="4 of 4";
                                  }
// ----- Three
threerandomnumber=Math.floor(Math.random()*12+1)
             if (groups[2] == 0) {                //10:1     groups[2] += 1;
                document.getElementById("odds3").innerHTML = threerandomnumber + ":1";
				document.getElementById("threes").innerHTML ="0 of 4";
                                  }

             if (groups[2] == 1) {                //14:1
                document.getElementById("odds3").innerHTML = threerandomnumber + ":1";
				document.getElementById("threes").innerHTML ="1 of 4";
                                  }

             if (groups[2] == 2) {                //21:1
                document.getElementById("odds3").innerHTML = threerandomnumber + ":1";
				document.getElementById("threes").innerHTML ="2 of 4";
                                  }

             if (groups[2] == 3) {                //43:1
                document.getElementById("odds3").innerHTML = threerandomnumber + ":1";
				document.getElementById("threes").innerHTML ="3 of 4";
                                  }

             if (groups[2] == 4) {                //0:0
                document.getElementById("odds3").innerHTML = "0:0";
				document.getElementById("threes").innerHTML ="4 of 4";
                                  }
// ----- Four
fourrandomnumber=Math.floor(Math.random()*18+1)
             if (groups[3] == 0) {                //10:1     groups[3] += 1;
                document.getElementById("odds4").innerHTML = fourrandomnumber + ":1";
				document.getElementById("fours").innerHTML ="0 of 4";
                                  }

             if (groups[3] == 1) {                //14:1
                document.getElementById("odds4").innerHTML = fourrandomnumber + ":1";
				document.getElementById("fours").innerHTML ="1 of 4";
                                  }

             if (groups[3] == 2) {                //21:1
                document.getElementById("odds4").innerHTML = fourrandomnumber + ":1";
				document.getElementById("fours").innerHTML ="2 of 4";
                                  }

             if (groups[3] == 3) {                //43:1
                document.getElementById("odds4").innerHTML = fourrandomnumber + ":1";
				document.getElementById("fours").innerHTML ="3 of 4";
                                  }

             if (groups[3] == 4) {                //0:0
                document.getElementById("odds4").innerHTML = "0:0";
				document.getElementById("fours").innerHTML ="4 of 4";
                                  }
// ----- Five
fiverandomnumber=Math.floor(Math.random()*21+1)
             if (groups[4] == 0) {                //10:1     groups[4] += 1;
                document.getElementById("odds5").innerHTML = fiverandomnumber + ":1";
				document.getElementById("fives").innerHTML ="0 of 4";
                                  }

             if (groups[4] == 1) {                //14:1
                document.getElementById("odds5").innerHTML = fiverandomnumber + ":1";
				document.getElementById("fives").innerHTML ="1 of 4";
                                  }

             if (groups[4] == 2) {                //21:1
                document.getElementById("odds5").innerHTML = fiverandomnumber + ":1";
				document.getElementById("fives").innerHTML ="2 of 4";
                                  }

             if (groups[4] == 3) {                //43:1
                document.getElementById("odds5").innerHTML = fiverandomnumber + ":1";
				document.getElementById("fives").innerHTML ="3 of 4";
                                  }

             if (groups[4] == 4) {                //0:0
                document.getElementById("odds5").innerHTML = "0:0";
				document.getElementById("fives").innerHTML ="4 of 4";
                                  }
// ----- Six
sixrandomnumber=Math.floor(Math.random()*17+1)
             if (groups[5] == 0) {                //10:1     groups[5] += 1;
                document.getElementById("odds6").innerHTML = sixrandomnumber + ":1";
				document.getElementById("sixs").innerHTML ="0 of 4";
                                  }

             if (groups[5] == 1) {                //14:1
                document.getElementById("odds6").innerHTML = sixrandomnumber + ":1";
				document.getElementById("sixs").innerHTML ="1 of 4";
                                  }

             if (groups[5] == 2) {                //21:1
                document.getElementById("odds6").innerHTML = sixrandomnumber + ":1";
				document.getElementById("sixs").innerHTML ="2 of 4";
                                  }

             if (groups[5] == 3) {                //43:1
                document.getElementById("odds6").innerHTML = sixrandomnumber + ":1";
				document.getElementById("sixs").innerHTML ="3 of 4";
                                  }

             if (groups[5] == 4) {                //0:0
                document.getElementById("odds6").innerHTML = "0:0";
				document.getElementById("sixs").innerHTML ="4 of 4";
                                  }
// ----- Seven
sevenrandomnumber=Math.floor(Math.random()*26+1)
             if (groups[6] == 0) {                //10:1     groups[6] += 1;
                document.getElementById("odds7").innerHTML = sevenrandomnumber + ":1";
				document.getElementById("sevens").innerHTML ="0 of 4";
                                  }

             if (groups[6] == 1) {                //14:1
                document.getElementById("odds7").innerHTML = sevenrandomnumber + ":1";
				document.getElementById("sevens").innerHTML ="1 of 4";
                                  }

             if (groups[6] == 2) {                //21:1
                document.getElementById("odds7").innerHTML = sevenrandomnumber + ":1";
				document.getElementById("sevens").innerHTML ="2 of 4";
                                  }

             if (groups[6] == 3) {                //43:1
                document.getElementById("odds7").innerHTML = sevenrandomnumber + ":1";
				document.getElementById("sevens").innerHTML ="3 of 4";
                                  }

             if (groups[6] == 4) {                //0:0
                document.getElementById("odds7").innerHTML = "0:0";
				document.getElementById("sevens").innerHTML ="4 of 4";
                                  }
// ----- Eight
eightrandomnumber=Math.floor(Math.random()*28+1)
             if (groups[7] == 0) {                //10:1     groups[7] += 1;
                document.getElementById("odds8").innerHTML = eightrandomnumber + ":1";
				document.getElementById("eights").innerHTML ="0 of 4";
                                  }

             if (groups[7] == 1) {                //14:1
                document.getElementById("odds8").innerHTML = eightrandomnumber + ":1";
				document.getElementById("eights").innerHTML ="1 of 4";
                                  }

             if (groups[7] == 2) {                //21:1
                document.getElementById("odds8").innerHTML = eightrandomnumber + ":1";
				document.getElementById("eights").innerHTML ="2 of 4";
                                  }

             if (groups[7] == 3) {                //43:1
                document.getElementById("odds8").innerHTML = eightrandomnumber + ":1";
				document.getElementById("eights").innerHTML ="3 of 4";
                                  }

             if (groups[7] == 4) {                //0:0
                document.getElementById("odds8").innerHTML = "0:0";
				document.getElementById("eights").innerHTML ="4 of 4";
                                  }
// ----- Nine
ninerandomnumber=Math.floor(Math.random()*32+1)
             if (groups[8] == 0) {                //10:1     groups[8] += 1;
                document.getElementById("odds9").innerHTML = ninerandomnumber + ":1";
				document.getElementById("nines").innerHTML ="0 of 4";
                                  }

             if (groups[8] == 1) {                //14:1
                document.getElementById("odds9").innerHTML = ninerandomnumber + ":1";
				document.getElementById("nines").innerHTML ="1 of 4";
                                  }

             if (groups[8] == 2) {                //21:1
                document.getElementById("odds9").innerHTML = ninerandomnumber + ":1";
				document.getElementById("nines").innerHTML ="2 of 4";
                                  }

             if (groups[8] == 3) {                //43:1
                document.getElementById("odds9").innerHTML = ninerandomnumber + ":1";
				document.getElementById("nines").innerHTML ="3 of 4";
                                  }

             if (groups[8] == 4) {                //0:0
                document.getElementById("odds9").innerHTML = "0:0";
				document.getElementById("nines").innerHTML ="4 of 4";
                                  }
// ----- Ten
tenrandomnumber=Math.floor(Math.random()*23+1)
             if (groups[9] == 0) {                //10:1     groups[9] += 1;
                document.getElementById("odds10").innerHTML = tenrandomnumber + ":1";
				document.getElementById("tens").innerHTML ="0 of 4";
                                  }

             if (groups[9] == 1) {                //14:1
                document.getElementById("odds10").innerHTML = tenrandomnumber + ":1";
				document.getElementById("tens").innerHTML ="1 of 4";
                                  }

             if (groups[9] == 2) {                //21:1
                document.getElementById("odds10").innerHTML = tenrandomnumber + ":1";
				document.getElementById("tens").innerHTML ="2 of 4";
                                  }

             if (groups[9] == 3) {                //43:1
                document.getElementById("odds10").innerHTML = tenrandomnumber + ":1";
				document.getElementById("tens").innerHTML ="3 of 4";
                                  }

             if (groups[9] == 4) {                //0:0
                document.getElementById("odds10").innerHTML = "0:0";
				document.getElementById("tens").innerHTML ="4 of 4";
                                  }
// ----- Jack
jackrandomnumber=Math.floor(Math.random()*17+1)
             if (groups[10] == 0) {                //10:1     groups[10] += 1;
                document.getElementById("oddsJ").innerHTML = jackrandomnumber + ":1";
				document.getElementById("jacks").innerHTML ="0 of 4";
                                  }

             if (groups[10] == 1) {                //14:1
                document.getElementById("oddsJ").innerHTML = jackrandomnumber + ":1";
				document.getElementById("jacks").innerHTML ="1 of 4";
                                  }

             if (groups[10] == 2) {                //21:1
                document.getElementById("oddsJ").innerHTML = jackrandomnumber + ":1";
				document.getElementById("jacks").innerHTML ="2 of 4";
                                  }

             if (groups[10] == 3) {                //43:1
                document.getElementById("oddsJ").innerHTML = jackrandomnumber + ":1";
				document.getElementById("jacks").innerHTML ="3 of 4";
                                  }

             if (groups[10] == 4) {                //0:0
                document.getElementById("oddsJ").innerHTML = "0:0";
				document.getElementById("jacks").innerHTML ="4 of 4";
                                  }
// ----- Queen
queenrandomnumber=Math.floor(Math.random()*19+1)
             if (groups[11] == 0) {                //10:1     groups[11] += 1;
                document.getElementById("oddsQ").innerHTML = queenrandomnumber + ":1";
				document.getElementById("queens").innerHTML ="0 of 4";
                                  }

             if (groups[11] == 1) {                //14:1
                document.getElementById("oddsQ").innerHTML = queenrandomnumber + ":1";
				document.getElementById("queens").innerHTML ="1 of 4";
                                  }

             if (groups[11] == 2) {                //21:1
                document.getElementById("oddsQ").innerHTML = queenrandomnumber + ":1";
				document.getElementById("queens").innerHTML ="2 of 4";
                                  }

             if (groups[11] == 3) {                //43:1
                document.getElementById("oddsQ").innerHTML = queenrandomnumber + ":1";
				document.getElementById("queens").innerHTML ="3 of 4";
                                  }

             if (groups[11] == 4) {                //0:0
                document.getElementById("oddsQ").innerHTML = "0:0";
				document.getElementById("queens").innerHTML ="4 of 4";
                                  }
// ----- King
kingrandomnumber=Math.floor(Math.random()*12+1)
             if (groups[12] == 0) {                //10:1     groups[12] += 1;
                document.getElementById("oddsK").innerHTML = kingrandomnumber + ":1";
				document.getElementById("kings").innerHTML ="0 of 4";
                                  }

             if (groups[12] == 1) {                //14:1
                document.getElementById("oddsK").innerHTML = kingrandomnumber + ":1";
				document.getElementById("kings").innerHTML ="1 of 4";
                                  }

             if (groups[12] == 2) {                //21:1
                document.getElementById("oddsK").innerHTML = kingrandomnumber + ":1";
				document.getElementById("kings").innerHTML ="2 of 4";
                                  }

             if (groups[12] == 3) {                //43:1
                document.getElementById("oddsK").innerHTML = kingrandomnumber + ":1";
				document.getElementById("kings").innerHTML ="3 of 4";
                                  }

             if (groups[12] == 4) {                //0:0
                document.getElementById("oddsK").innerHTML = "0:0";
				document.getElementById("kings").innerHTML ="4 of 4";
                                  }
// ----- Spade
spaderandomnumber=Math.floor(Math.random()*2+1)
             if (groups[13] == 0) {  //  groups[13] += 1;
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="0 of 13";
                                  }

             if (groups[13] == 1) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="1 of 13";
                                  }

             if (groups[13] == 2) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="2 of 13";
                                  }

             if (groups[13] == 3) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="3 of 13";
                                  }

             if (groups[13] == 4) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="4 of 13";
                                  }
             if (groups[13] == 5) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="5 of 13";
                                  }
             if (groups[13] == 6) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="6 of 13";
                                  }
             if (groups[13] == 7) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="7 of 13";
                                  }
             if (groups[13] == 8) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="8 of 13";
                                  }
             if (groups[13] == 9) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="9 of 13";
                                  }
             if (groups[13] == 10) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="10 of 13";
                                  }
             if (groups[13] == 11) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="11 of 13";
                                  }
             if (groups[13] == 12) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="12 of 13";
                                  }
             if (groups[13] == 13) {
                document.getElementById("oddsS").innerHTML = spaderandomnumber + ":1";
				document.getElementById("spades").innerHTML ="13 of 13";
                                  }
// ----- Heart
heartrandomnumber=Math.floor(Math.random()*2+1)
             if (groups[14] == 0) {   // groups[14] = 14+1;
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="0 of 13";
                                  }

             if (groups[14] == 1) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="1 of 13";
                                  }

             if (groups[14] == 2) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="2 of 13";
                                  }

             if (groups[14] == 3) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="3 of 13";
                                  }

             if (groups[14] == 4) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="4 of 13";
                                  }
             if (groups[14] == 5) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="5 of 13";
                                  }
             if (groups[14] == 6) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="6 of 13";
                                  }
             if (groups[14] == 7) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="7 of 13";
                                  }
             if (groups[14] == 8) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="8 of 13";
                                  }
             if (groups[14] == 9) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="9 of 13";
                                  }
             if (groups[14] == 10) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="10 of 13";
                                  }
             if (groups[14] == 11) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="11 of 13";
                                  }
             if (groups[14] == 12) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="12 of 13";
                                  }
             if (groups[14] == 13) {
                document.getElementById("oddsH").innerHTML = heartrandomnumber + ":1";
				document.getElementById("hearts").innerHTML ="13 of 13";
                                  }
// ----- Club
clubrandomnumber=Math.floor(Math.random()*2+1)
             if (groups[15] == 0) {   //groups[15] += 1;
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="0 of 13";
                                  }

             if (groups[15] == 1) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="1 of 13";
                                  }

             if (groups[15] == 2) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="2 of 13";
                                  }

             if (groups[15] == 3) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="3 of 13";
                                  }

             if (groups[15] == 4) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="4 of 13";
                                  }
             if (groups[15] == 5) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="5 of 13";
                                  }
             if (groups[15] == 6) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="6 of 13";
                                  }
             if (groups[15] == 7) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="7 of 13";
                                  }
             if (groups[15] == 8) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="8 of 13";
                                  }
             if (groups[15] == 9) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="9 of 13";
                                  }
             if (groups[15] == 10) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="10 of 13";
                                  }
             if (groups[15] == 11) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="11 of 13";
                                  }
             if (groups[15] == 12) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="12 of 13";
                                  }
             if (groups[15] == 13) {
                document.getElementById("oddsC").innerHTML = clubrandomnumber + ":1";
				document.getElementById("clubs").innerHTML ="13 of 13";
                                  }
// ----- Diam
diamrandomnumber=Math.floor(Math.random()*2+1)
             if (groups[16] == 0) {  //groups[16] += 1;
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="0 of 13";
                                  }

             if (groups[16] == 1) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="1 of 13";
                                  }

             if (groups[16] == 2) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="2 of 13";
                                  }

             if (groups[16] == 3) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="3 of 13";
                                  }

             if (groups[16] == 4) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="4 of 13";
                                  }
             if (groups[16] == 5) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="5 of 13";
                                  }
             if (groups[16] == 6) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="6 of 13";
                                  }
             if (groups[16] == 7) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="7 of 13";
                                  }
             if (groups[16] == 8) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="8 of 13";
                                  }
             if (groups[16] == 9) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="9 of 13";
                                  }
             if (groups[16] == 10) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="10 of 13";
                                  }
             if (groups[16] == 11) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="11 of 13";
                                  }
             if (groups[16] == 12) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="12 of 13";
                                  }
             if (groups[16] == 13) {
                document.getElementById("oddsD").innerHTML = diamrandomnumber + ":1";
				document.getElementById("diams").innerHTML ="13 of 13";
                                  }
} 

function overround(){
     total = (acerandomnumber+tworandomnumber+threerandomnumber+fourrandomnumber+fiverandomnumber+sixrandomnumber+sevenrandomnumber+eightrandomnumber+ninerandomnumber+tenrandomnumber+jackrandomnumber+queenrandomnumber+kingrandomnumber)-100;
     document.getElementById("overround").innerHTML = "Overround " + total;	 
} 

function checkWagers() {  // function wait loop inside 
            function wait() {
            var wait = 3;
            var waitId = setInterval(function() {
            wait--;
            if (wait == 0){
            clearInterval(waitId);
            document.getElementById("won").style.display = 'none';
			document.getElementById("winner").style.display = 'none';
			document.getElementById("lost").style.display = 'none';
            document.getElementById("winnings").style.display = 'none';
//			document.getElementById("aaa").style.display = 'none';
			document.getElementById("lock").style.display = 'none';
            }

            }, 1000);
            }
       //console.log(rand)
           if (( rand == "images/aceclub.png") || ( rand == "images/aceheart.png") || ( rand == "images/acespade.png") || ( rand == "images/acediam.png")) { 
                   if (toteAce > 0) { 
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                 var payout=toteAce+(toteAce*acerandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/twoclub.png") || ( rand == "images/twoheart.png") || ( rand == "images/twospade.png") || ( rand == "images/twodiam.png"))  {
                    if (toteTwo > 0) {
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteTwo+(toteTwo*tworandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/threeclub.png") || ( rand == "images/threeheart.png") || ( rand == "images/threespade.png") || ( rand == "images/threediam.png"))  {
                   if (toteThree > 0) {
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteThree+(toteThree*threerandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/fourclub.png") || ( rand == "images/fourheart.png") || ( rand == "images/fourspade.png") || ( rand == "images/fourdiam.png"))  {
                   if (toteFour > 0) { 
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteFour+(toteFour*fourrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/fiveclub.png") || ( rand == "images/fiveheart.png") || ( rand == "images/fivespade.png") || ( rand == "images/fivediam.png"))  {
                   if (toteFive > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteFive+(toteFive*fiverandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/sixclub.png") || ( rand == "images/sixheart.png") || ( rand == "images/sixspade.png") || ( rand == "images/sixdiam.png"))  {
                   if (toteSix > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteSix+(toteSix*sixrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/sevenclub.png") || ( rand == "images/sevenheart.png") || ( rand == "images/sevenspade.png") || ( rand == "images/sevendiam.png"))  {
                   if (toteSeven > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteSeven+(toteSeven*sevenrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/eightclub.png") || ( rand == "images/eightheart.png") || ( rand == "images/eightspade.png") || ( rand == "images/eightdiam.png"))  {
                   if (toteEight > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteEight+(toteEight*eightrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/nineclub.png") || ( rand == "images/nineheart.png") || ( rand == "images/ninespade.png") || ( rand == "images/ninediam.png"))  {
                   if (toteNine > 0) { 
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteNine+(toteNine*ninerandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/tenclub.png") || ( rand == "images/tenheart.png") || ( rand == "images/tenspade.png") || ( rand == "images/tendiam.png"))  {
                   if (toteTen > 0) { 
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteTen+(toteTen*tenrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/jackclub.png") || ( rand == "images/jackheart.png") || ( rand == "images/jackspade.png") || ( rand == "images/jackdiam.png"))  {
                   if (toteJack > 0) {
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteJack+(toteJack*jackrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/queenclub.png") || ( rand == "images/queenheart.png") || ( rand == "images/queenspade.png") || ( rand == "images/queendiam.png"))  {
                   if (toteQueen > 0) {
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteQueen+(toteQueen*queenrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;
                     }
                  wait()
                     }
      if (( rand == "images/kingclub.png") || ( rand == "images/kingheart.png") || ( rand == "images/kingspade.png") || ( rand == "images/kingdiam.png"))  {
                   if (toteKing > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteKing+(toteKing*kingrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;

                     }
                  wait()
                     }
// Suits Below
      if (( rand == "images/acespade.png") || ( rand == "images/twospade.png") || ( rand == "images/threespade.png") || ( rand == "images/fourspade.png") || ( rand == "images/fivespade.png") || ( rand == "images/sixspade.png") || ( rand == "images/sevenspade.png") || ( rand == "images/eightspade.png") || ( rand == "images/ninespade.png") || ( rand == "images/tenspade.png") || ( rand == "images/jackspade.png") || ( rand == "images/queenspade.png") || ( rand == "images/kingspade.png"))  {
                   if (toteSpade > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteSpade+(toteSpade*spaderandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;

                     }
                  wait()
                     }
      if (( rand == "images/aceheart.png") || ( rand == "images/twoheart.png") || ( rand == "images/threeheart.png") || ( rand == "images/fourheart.png") || ( rand == "images/fiveheart.png") || ( rand == "images/sixheart.png") || ( rand == "images/sevenheart.png") || ( rand == "images/eightheart.png") || ( rand == "images/nineheart.png") || ( rand == "images/tenheart.png") || ( rand == "images/jackheart.png") || ( rand == "images/queenheart.png") || ( rand == "images/kingheart.png"))  {
                   if (toteHeart > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteHeart+(toteHeart*heartrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;

                     }
                  wait()
                     }
      if (( rand == "images/aceclub.png") || ( rand == "images/twoclub.png") || ( rand == "images/threeclub.png") || ( rand == "images/fourclub.png") || ( rand == "images/fiveclub.png") || ( rand == "images/sixclub.png") || ( rand == "images/sevenclub.png") || ( rand == "images/eightclub.png") || ( rand == "images/nineclub.png") || ( rand == "images/tenclub.png") || ( rand == "images/jackclub.png") || ( rand == "images/queenclub.png") || ( rand == "images/kingclub.png"))  {
                   if (toteClub > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteClub+(toteClub*clubrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;

                     }
                  wait()
                     }
      if (( rand == "images/acediam.png") || ( rand == "images/twodiam.png") || ( rand == "images/threediam.png") || ( rand == "images/fourdiam.png") || ( rand == "images/fivediam.png") || ( rand == "images/sixdiam.png") || ( rand == "images/sevendiam.png") || ( rand == "images/eightdiam.png") || ( rand == "images/ninediam.png") || ( rand == "images/tendiam.png") || ( rand == "images/jackdiam.png") || ( rand == "images/queendiam.png") || ( rand == "images/kingdiam.png"))  {
                   if (toteDiam > 0) {  
                          document.getElementById("lock").style.display = 'none';
                          document.getElementById("won").style.display = 'block';
						  document.getElementById("winner").style.display = 'block';
                          document.getElementById("winnings").style.display = 'block';
                  var payout=toteDiam+(toteDiam*diamrandomnumber);
                  money += payout;
        document.getElementById("money").innerHTML = money;         // updateMoney();
        document.getElementById("winnings").innerHTML = payout;

                     }
                  wait()
                     }

}

function resetTote(){

 pot=0,toteAce=0, toteTwo=0, toteThree=0, toteFour=0, toteFive=0, toteSix=0, toteSeven=0, toteEight=0, toteNine=0, toteTen=0, toteJack=0, toteQueen=0, toteKing=0; toteSpade=0; toteHeart=0; toteClub=0; toteDiam =0;
updateStatus()
document.getElementById("toteA").innerHTML = toteAce;
document.getElementById("tote2").innerHTML = toteTwo;
document.getElementById("tote3").innerHTML = toteThree;
document.getElementById("tote4").innerHTML = toteFour;
document.getElementById("tote5").innerHTML = toteFive;
document.getElementById("tote6").innerHTML = toteSix;
document.getElementById("tote7").innerHTML = toteSeven;
document.getElementById("tote8").innerHTML = toteEight;
document.getElementById("tote9").innerHTML = toteNine;
document.getElementById("tote10").innerHTML = toteTen;
document.getElementById("toteJ").innerHTML = toteJack;
document.getElementById("toteQ").innerHTML = toteQueen;
document.getElementById("toteK").innerHTML = toteKing;
document.getElementById("toteS").innerHTML = toteSpade;
document.getElementById("toteH").innerHTML = toteHeart;
document.getElementById("toteC").innerHTML = toteClub;
document.getElementById("toteD").innerHTML = toteDiam;
}

function updateMoney() {
       if ( pot <= 0 ){ 
       if ( money <= 0 ){ 
       document.getElementById("aaa").innerHTML = "Lost? Here's A Loan !!!";
          money = 1000 ;}
      }
       document.getElementById("money").innerHTML = money;
      }

function updateStatus() {
        document.getElementById("status").innerHTML = pot + " Pot";
      }

function countdown() {   //  Display The Clock Countdown



    var clock = 50	;   // 890 miliseconds = 89 seconds---------
    var timerId = setInterval(function() {
//    document.getElementById("winnings").style.display = 'none';
	    document.getElementById("lock").style.display = 'none';
        clock--;
		
		    if (count >= 30) { 

	return;
                     }
		
	if (count >= 30) { 
	clearInterval();
	return;
                     }

    if (clock >= 2){
	document.getElementById("aaa").style.display = 'block';
    document.getElementById("aaa").innerHTML = "next card in "+clock+" seconds";
                   }
				   
    if (clock == 1){
    document.getElementById("aaa").innerHTML = "next card in 0 seconds";
    clearInterval(timerId);
    document.getElementById("aaa").style.display = 'none';
    document.getElementById("lock").style.display = 'block';
    document.getElementById("textbox").style.display = 'none';
    document.getElementById("button").style.display = 'none';
                   }
                                       }, 1000);
}

function click() {      // Event Listener
      var img = document.getElementById('ace');
      img.addEventListener("click", function (){     // Ace Click Action
        wA=0;
    toteA.innerHTML = toteAce;
    toteAce = toteAce + x;
w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1; 
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('two');
      img.addEventListener("click", function (){     // Two Click Action
        w2=0;
    tote2.innerHTML = toteTwo;
    toteTwo = toteTwo + x;
wA = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('three');
      img.addEventListener("click", function (){     // Three Click Action
        w3=0;
    tote3.innerHTML = toteThree;
    toteThree = toteThree + x;
wA = 1, w2 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('four');
      img.addEventListener("click", function (){     // Four Click Action
        w4=0;
    tote4.innerHTML = toteFour;
    toteFour = toteFour + x;
wA = 1, w2 = 1, w3 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('five');
      img.addEventListener("click", function (){     // Five Click Action
        w5=0;
    tote5.innerHTML = toteFive;
    toteFive = toteFive + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('six');
      img.addEventListener("click", function (){     // Six Click Action
        w6=0;
    tote6.innerHTML = toteSix;
    toteSix = toteSix + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('seven');
      img.addEventListener("click", function (){     // Seven Click Action
        w7=0;
    tote7.innerHTML = toteSeven;
    toteSeven = toteSeven + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('eight');
      img.addEventListener("click", function (){     // Eight Click Action
        w8=0;
    tote8.innerHTML = toteEight;
    toteEight = toteEight + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('nine');
      img.addEventListener("click", function (){     // Nine Click Action
        w9=0;
    tote9.innerHTML = toteNine;
    toteNine = toteNine + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w10 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('ten');
      img.addEventListener("click", function (){     // Ten Click Action
        w10=0;
    tote10.innerHTML = toteTen;
    toteTen = toteTen + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, wJ = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('jack');
      img.addEventListener("click", function (){     // Jack Click Action
        wJ=0;
    toteJ.innerHTML = toteJack;
    toteJack = toteJack + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wQ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('queen');
      img.addEventListener("click", function (){     // Queen Click Action
        wQ=0;
    toteQ.innerHTML = toteQueen;
    toteQueen = toteQueen + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wK = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
      var img = document.getElementById('king');
      img.addEventListener("click", function (){     // King Click Action
        wK=0;
    toteK.innerHTML = toteKing;
    toteKing = toteKing + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1; wS = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
// Suit Wagers Below
      var img = document.getElementById('spade');
      img.addEventListener("click", function (){     // Spade Click Action
        wS=0;
    toteS.innerHTML = toteSpade;
    toteSpade = toteSpade + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1; wK = 1; wH = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });
	   // heart
      var img = document.getElementById('heart');
      img.addEventListener("click", function (){     // Heart Click Action
        wH=0;
    toteH.innerHTML = toteHeart;
    toteHeart = toteHeart + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1; wK = 1; wS = 1; wC = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });	   
	   // club
      var img = document.getElementById('club');
      img.addEventListener("click", function (){     // Club Click Action
        wC=0;
    toteC.innerHTML = toteClub;
    toteClub = toteClub + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1; wK = 1; wS = 1; wH = 1; wD = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });	   
	   // diam
      var img = document.getElementById('diam');
      img.addEventListener("click", function (){     // Diam Click Action
        wD=0;
    toteD.innerHTML = toteDiam;
    toteDiam = toteDiam + x;
wA = 1, w2 = 1, w3 = 1, w4 = 1, w5 = 1, w6 = 1, w7 = 1, w8 = 1, w9 = 1, w10 = 1, wJ = 1, wQ = 1; wK = 1; wS = 1; wH = 1; wC = 1;
        document.getElementById("textbox").style.display = 'block';
        document.getElementById("button").style.display = 'block';
       });	   
      }

function updown() {     // Event Listener
      var img = document.getElementById('ace');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("ace").src = "images/frame.png";
       });
      var img = document.getElementById('ace');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("ace").src = "images/frame2.png";
       });
      var img = document.getElementById('two');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("two").src = "images/frame.png";
       });
      var img = document.getElementById('two');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("two").src = "images/frame2.png";
       });
      var img = document.getElementById('three');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("three").src = "images/frame.png";
       });
      var img = document.getElementById('three');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("three").src = "images/frame2.png";
       });
      var img = document.getElementById('four');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("four").src = "images/frame.png";
       });
      var img = document.getElementById('four');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("four").src = "images/frame2.png";
       });
      var img = document.getElementById('five');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("five").src = "images/frame.png";
       });
      var img = document.getElementById('five');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("five").src = "images/frame2.png";
       });
      var img = document.getElementById('six');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("six").src = "images/frame.png";
       });
      var img = document.getElementById('six');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("six").src = "images/frame2.png";
       });
      var img = document.getElementById('seven');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("seven").src = "images/frame.png";
       });
      var img = document.getElementById('seven');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("seven").src = "images/frame2.png";
       });
      var img = document.getElementById('eight');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("eight").src = "images/frame.png";
       });
      var img = document.getElementById('eight');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("eight").src = "images/frame2.png";
       });
      var img = document.getElementById('nine');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("nine").src = "images/frame.png";
       });
      var img = document.getElementById('nine');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("nine").src = "images/frame2.png";
       });
      var img = document.getElementById('ten');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("ten").src = "images/frame.png";
       });
      var img = document.getElementById('ten');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("ten").src = "images/frame2.png";
       });
      var img = document.getElementById('jack');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("jack").src = "images/frame.png";
       });
      var img = document.getElementById('jack');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("jack").src = "images/frame2.png";
       });
      var img = document.getElementById('queen');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("queen").src = "images/frame.png";
       });
      var img = document.getElementById('queen');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("queen").src = "images/frame2.png";
       });
      var img = document.getElementById('king');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("king").src = "images/frame.png";
       });
      var img = document.getElementById('king');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("king").src = "images/frame2.png";
       });
// Suits Below
      var img = document.getElementById('spade');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("spade").src = "images/frame4.png";
       });
      var img = document.getElementById('spade');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("spade").src = "images/frame3.png";
       });
	         var img = document.getElementById('heart');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("heart").src = "images/frame4.png";
       });
      var img = document.getElementById('heart');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("heart").src = "images/frame3.png";
       });
	         var img = document.getElementById('club');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("club").src = "images/frame4.png";
       });
      var img = document.getElementById('club');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("club").src = "images/frame3.png";
       });
	         var img = document.getElementById('diam');
      img.addEventListener("mouseover", function (){     // Mouse Over
        document.getElementById("diam").src = "images/frame4.png";
       });
      var img = document.getElementById('diam');
      img.addEventListener("mouseout", function (){     // Mouse Out
        document.getElementById("diam").src = "images/frame3.png";
       });
      }

// was here update credit

function enterWager(){  // doMath function inside here
var x=parseInt(document.getElementById('textbox').value,10);
       if (money <= 0) {
          x = 0 ; }
document.getElementById("bet").innerHTML = parseInt(x,10);
if(isNaN(x)||x < 1 || x > 250)
	{
    document.getElementById("aaa").innerHTML = "You're Out Of Money!!!";
	}
        document.getElementById("textbox").style.display = 'none';
        document.getElementById("button").style.display = 'none';
function doMath() {
       if (money <= 0) {
          money = 0 ; }
       if (x > money) {
          x = money ; }
      money = money - x;
      pot = pot + x;
    if (wA == 0){  // display wager on tote board for A
    toteAce = toteAce + x;
    toteA.innerHTML = toteAce;
    wA = 1;
                      }
    if (w2 == 0){  // display wager on tote board for 2
    toteTwo = toteTwo + x;
    tote2.innerHTML = toteTwo;
    w2 = 1;
                      }
    if (w3 == 0){  // display wager on tote board for 3
    toteThree = toteThree + x;
    tote3.innerHTML = toteThree;
    w3 = 1;
                      }
    if (w4 == 0){  // display wager on tote board for 4
    toteFour = toteFour + x;
    tote4.innerHTML = toteFour;
    w4 = 1;
                      }
    if (w5 == 0){  // display wager on tote board for 5
    toteFive = toteFive + x;
    tote5.innerHTML = toteFive;
    w5 = 1;
                      }
    if (w6 == 0){  // display wager on tote board for 6
    toteSix = toteSix + x;
    tote6.innerHTML = toteSix;
    w6 = 1;
                      }
    if (w7 == 0){  // display wager on tote board for 7
    toteSeven = toteSeven + x;
    tote7.innerHTML = toteSeven;
    w7 = 1;
                      }
    if (w8 == 0){  // display wager on tote board for 8
    toteEight = toteEight + x;
    tote8.innerHTML = toteEight;
    w8 = 1;
                      }
    if (w9 == 0){  // display wager on tote board for 9
    toteNine = toteNine + x;
    tote9.innerHTML = toteNine;
    w9 = 1;
                      }
    if (w10 == 0){  // display wager on tote board for 10
    toteTen = toteTen + x;
    tote10.innerHTML = toteTen;
    w10 = 1;
                      }
    if (wJ == 0){  // display wager on tote board for J
    toteJack = toteJack + x;
    toteJ.innerHTML = toteJack;
    wJ = 1;
                      }
    if (wQ == 0){  // display wager on tote board for Q
    toteQueen = toteQueen + x;
    toteQ.innerHTML = toteQueen;
    wQ = 1;
                      }
    if (wK == 0){  // display wager on tote board for K
    toteKing = toteKing + x;
    toteK.innerHTML = toteKing;
    wK = 1;
                      }
    if (wS == 0){  // display wager on tote board for Spade
    toteSpade = toteSpade + x;
    toteS.innerHTML = toteSpade;
    wS = 1;
                      }
    if (wH == 0){  // display wager on tote board for Heart
    toteHeart = toteHeart + x;
    toteH.innerHTML = toteHeart;
    wH = 1;
                      }
    if (wC == 0){  // display wager on tote board for Club
    toteClub = toteClub + x;
    toteC.innerHTML = toteClub;
    wC = 1;
                      }
    if (wD == 0){  // display wager on tote board for Diamond
    toteDiam = toteDiam + x;
    toteD.innerHTML = toteDiam;
    wD = 1;
                      }
               }
doMath()

function updateCredit() {
var xml = new XMLHttpRequest(); 
var params = 'x='+encodeURIComponent(document.getElementById("money").innerHTML = money);  // variable is amount of credits
  
   if (window.XMLHttpRequest) { // Mozilla, Safari, ... 
      } else if (window.ActiveXObject) { // IE 8 and older  
    xml = new ActiveXObject("Microsoft.XMLHTTP");  
      }

xml.open("POST", 'credits.php', true);
xml.setRequestHeader("Content-Type", "text/xml");
xml.setRequestHeader("Content-length", params.length);
xml.setRequestHeader("Connection", "close");

//xml.onreadystatechange = function() {//Call a function when the state changes.
//    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//        alert(xmlhttp.responseText);
//    }
//}

xml.send(params); // send(string) -- This is used for POST only
}

updateMoney()
updateCredit()  // This is not working. It's not updating the user money in the db. 
updateStatus()

}

function banners() {
gfx=new Array();
wdh=new Array();
hgt=new Array();
lnk=new Array();

gfx[0]="images/ssworldairporttransfer_com.png";
gfx[1]="images/artdeko_info.png";
gfx[2]="images/sportdiva_ru.png";
gfx[3]="images/ss_wholesaleit.png";
gfx[4]="images/cookingmeat_ru.png";
gfx[5]="images/trackingsticker_com.png";
gfx[6]="images/meditainment_com.png";
gfx[7]="images/buybluesteel_com.png";
gfx[8]="images/chatsports_com.png";
gfx[9]="images/gas.png";
gfx[10]="images/ad1.png";
gfx[11]="images/ad2.png";
// gfx[12]="put you next image name here and remove the //.png";

lnk[0]="http://www.shareasale.com/r.cfm?b=330108&u=671906&m=35339&urllink=&afftrack=";
lnk[1]="http://www.artdeko.info/";
lnk[2]="http://sportdiva.ru/";
lnk[3]="http://www.shareasale.com/r.cfm?b=553517&u=671906&m=48174&urllink=&afftrack=" ;
lnk[4]="http://cookingmeat.ru/";
lnk[5]="http://www.shareasale.com/r.cfm?b=596741&u=671906&m=52596&urllink=&afftrack=";
lnk[6]="http://www.shareasale.com/r.cfm?b=128852&u=671906&m=9747&urllink=&afftrack=";
lnk[7]="http://www.shareasale.com/r.cfm?b=594819&u=671906&m=51119&urllink=&afftrack=";
lnk[8]="http://www.chatsports.com";
lnk[9]="http://globaladshare.com/index.php?spon=EdNolan";
lnk[10]="http://icardcounting.com/images/advertise.png";
lnk[11]="http://icardcounting.com/images/advertise.png";
// lnk[*]="put you next hyperlink here and remove the //";


// Edit the random number below after finished with the to


wdh[0]="200";
hgt[0]="30";

function banner1() {
rnd0=Math.floor(Math.random()*12);
document.getElementById("b1").innerHTML =('<a target="_blank" href="'+lnk[rnd0]+'"><IMG SRC="'+gfx[rnd0]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
 }
function banner2() {
rnd1=Math.floor(Math.random()*12);
document.getElementById("b2").innerHTML =('<a target="_blank" href="'+lnk[rnd1]+'"><IMG SRC="'+gfx[rnd1]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner3() {
rnd2=Math.floor(Math.random()*12);
document.getElementById("b3").innerHTML =('<a target="_blank" href="'+lnk[rnd2]+'"><IMG SRC="'+gfx[rnd2]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner4() {
rnd3=Math.floor(Math.random()*12);
document.getElementById("b4").innerHTML =('<a target="_blank" href="'+lnk[rnd3]+'"><IMG SRC="'+gfx[rnd3]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner5() {
rnd4=Math.floor(Math.random()*12);
document.getElementById("b5").innerHTML =('<a target="_blank" href="'+lnk[rnd4]+'"><IMG SRC="'+gfx[rnd4]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}
function banner6() {
rnd5=Math.floor(Math.random()*12);
document.getElementById("b6").innerHTML =('<a target="_blank" href="'+lnk[rnd5]+'"><IMG SRC="'+gfx[rnd5]+'" border=0 width='+wdh[0]+' height='+hgt[0]+'><\/a>');
}

banner1()
banner2()
        do {
   banner2()
} while (rnd1 == rnd0);
		 
			
banner3()
         while ((rnd2 == rnd1) || (rnd2 == rnd0)){
			banner3()
			}
banner4()
         while ((rnd3 == rnd2) || (rnd3 == rnd1) || (rnd3 == rnd0)){
			banner4()
			}	
banner5()
         while ((rnd4 == rnd3) || (rnd4 == rnd2) || (rnd4 == rnd1) || (rnd4 == rnd0)){
			banner5()
			}			
banner6()
         while ((rnd5 == rnd4) || (rnd5 == rnd3) || (rnd5 == rnd2) || (rnd5 == rnd1) || (rnd5 == rnd0)){
			banner6()
			}
}

function mp3(){
   var mp3Array = ["race2arr.mp3", "baccano.mp3", "race3rondey.mp3", "race4jockey.mp3", "gamblingman.mp3", "race5bunny.mp3", "race6gettenthere.mp3", "wife.mp3"]; // create mp3Array
   var choice = Math.floor(Math.random() * mp3Array.length); // make choice
   var player = document.getElementById('sound');// get player and save it
   player.src = mp3Array[choice]; // Change the source of the file
   player.play(); // Play the audio
   player.addEventListener('ended', function (){
          if (player.ended){
          mp3();
          }
          }, true);
}

// ----------------  this is the end of all the functions ----------------------------------

