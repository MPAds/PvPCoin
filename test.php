<!DOCTYPE html>
<html>
    <head> 
<TITLE>Player vs Player Online Single Player Card Game</TITLE>
<META NAME="description" CONTENT="Count cards, play card counting on line wagering card game. Card players count cards to determine what the next card is going to be. Card counting is also available as an app for any Android device.">
<META NAME="robot" CONTENT="index,follow">
<META NAME="copyright" CONTENT="Copyright © 2013-2018 All Rights Reserved.">
<META NAME="author" CONTENT="Edward Nolan">
<META NAME="language" CONTENT="English">
<META NAME="revisit-after" CONTENT="15">
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="game.css">
		
<script src="http://code.jquery.com/jquery-latest.js"></script>


        <script type="text/javascript" src="css-pop.js"></script>			
    </head>
    <body style="width=100%" onLoad="updateMoney(); popup('popUpDiv'); click(); updown(); mp3()" >


	<!--POPUP--> 
<div id="container">
<div id="mainContent">   
    <div id="blanket" style="display:none;"></div>
	<div id="popUpDiv" style="display:none;"> <a href="#" onclick="popup('popUpDiv')" >Clicking Here Closes This Tutorial Pop Up</a> </div>	   
    <!-- end #mainContent --></div>
<!-- end #container --></div>	
    <!-- / POPUP-->	

        <table id="oddsTable" width="100%">
            <tr>
                <td><img src="images/1.png" id='a'  alt="One"></td>
                <td><img src="images/2.png" id='2'  alt="Two"></td>
                <td><img src="images/3.png" id='3'  alt="Three"></td>
                <td><img src="images/4.png" id='4'  alt="Four"></td>
                <td><img src="images/5.png" id='5'  alt="Five"></td>
                <td><img src="images/6.png" id='6'  alt="Six"></td>
                <td><img src="images/7.png" id='7'  alt="Seven"></td>
                <td><img src="images/8.png" id='8'  alt="Eight"></td>
                <td><img src="images/9.png" id='9'  alt="Nine"></td>
                <td><img src="images/10.png" id='10'  alt="Ten"></td>
                <td><img src="images/J.png" id='j'  alt="Jack"></td>
                <td><img src="images/Q.png" id='q'  alt="Queen"></td>
                <td><img src="images/K.png" id='k'  alt="King"></td>
            </tr>
            <tr>
                <td><div class="position" id="odds1"></div></td>
                <td><div class="position" id="odds2"></div></td>
                <td><div class="position" id="odds3"></div></td>
                <td><div class="position" id="odds4"></div></td>
                <td><div class="position" id="odds5"></div></td>
                <td><div class="position" id="odds6"></div></td>
                <td><div class="position" id="odds7"></div></td>
                <td><div class="position" id="odds8"></div></td>
                <td><div class="position" id="odds9"></div></td>
                <td><div class="position" id="odds10"></div></td>
                <td><div class="position" id="oddsJ"></div></td>
                <td><div class="position" id="oddsQ"></div></td>
                <td><div class="position" id="oddsK"></div></td>
            </tr>
        </table>
        <table width="100%">
            <tr>
                <td><div id="guess"></div></td>
            </tr>
            <tr>
                <td><div id="aaa"></div></td>
				<td><div class="position" id="oddsS"></div></td>
                <td><div class="position" id="oddsH"></div></td>
                <td><div class="position" id="oddsC"></div></td>
                <td><div class="position" id="oddsD"></div></td>
                <td><div class="position" id="oddsR"></div></td>
                <td><div class="position" id="oddsB"></div></td>
            </tr>
        </table>

        <img src="images/frame2.png" id='ace' />
        <img src="images/frame2.png" id='two' />
        <img src="images/frame2.png" id='three' />
        <img src="images/frame2.png" id='four' />
        <img src="images/frame2.png" id='five' />
        <img src="images/frame2.png" id='six' />
        <img src="images/frame2.png" id='seven' />
        <img src="images/frame2.png" id='eight' />
        <img src="images/frame2.png" id='nine' />
        <img src="images/frame2.png" id='ten' />
        <img src="images/frame2.png" id='jack' />
        <img src="images/frame2.png" id='queen' />
        <img src="images/frame2.png" id='king' />        
		<img src="images/frame3.png" id='spade' />
		<img src="images/frame3.png" id='heart' />
		<img src="images/frame3.png" id='club' />
		<img src="images/frame3.png" id='diam' />


		

<select id="textbox">
  <option value="1">1</option>
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="25" selected>25</option>
  <option value="50">50</option>
  <option value="75">75</option>
  <option value="100">100</option>
  <option value="200">200</option>
  <option value="250">250</option>
  <option value="500">500</option>
  <option value="1000">1000</option>
</select> 
    <button type="click" id="button" onclick="enterWager(); return false; banners.php">Wager!</button>

    <p>Money: $<span id="money"></span><br></p>
    <p1>Status: $<span id="status"></span></p1>
    <p2>Wagered: $<span id="bet"></span></p2>
    <p3><span id="lock">No More Bets!</span></p3>
    <p4><span id="won">YOU WON $</span></p4>   
    <p5><span id="winnings"></span></p5>
    <p6><span id="overround"></span></p6>
	<p7><span id="message"></span></p7>
    <table width="100%">
            <tr>
                <td><div  id="toteA"></div></td>
				<td><div  id="aces"></div></td>
                <td><div  id="tote2"></div></td>
				<td><div  id="twos"></div></td>
                <td><div  id="tote3"></div></td>
				<td><div  id="threes"></div></td>
                <td><div  id="tote4"></div></td>
				<td><div  id="fours"></div></td>
                <td><div  id="tote5"></div></td>
				<td><div  id="fives"></div></td>
                <td><div  id="tote6"></div></td>
				<td><div  id="sixs"></div></td>
                <td><div  id="tote7"></div></td>
				<td><div  id="sevens"></div></td>
                <td><div  id="tote8"></div></td>
				<td><div  id="eights"></div></td>
                <td><div  id="tote9"></div></td>
				<td><div  id="nines"></div></td>
                <td><div  id="tote10"></div></td>
				<td><div  id="tens"></div></td>
                <td><div  id="toteJ"></div></td>
				<td><div  id="jacks"></div></td>
                <td><div  id="toteQ"></div></td>
				<td><div  id="queens"></div></td>
                <td><div  id="toteK"></div></td>
				<td><div  id="kings"></div></td>
				<td><div  id="toteC"></div></td>
				<td><div  id="clubs"></div></td>
				<td><div  id="toteH"></div></td>
				<td><div  id="hearts"></div></td>
				<td><div  id="toteS"></div></td>
				<td><div  id="spades"></div></td>
				<td><div  id="toteD"></div></td>
				<td><div  id="diams"></div></td>
                <td><div  id="toteR"></div></td>
				<td><div  id="reds"></div></td>
				<td><div  id="toteB"></div></td>
				<td><div  id="blacks"></div></td>
           </tr>
           <tr>
                <td><img src="images/select.png" id="select"></td>
				<td><img src="images/winner.png" id="winner"></td>
				<td><img src="images/lost.png" id="lost"></td>
				<td><img src="images/getready.png" id="getready"></td>
				<td><a target="_blank" href="https://www.facebook.com/cardcountinggame"><img src="images/facebook.png" id="f"></a></td>
				
           </tr>
    </table>

        <script type="text/javascript" src="test.js"></script>

<font color="#000000"><BR>

        <table>
            <tr>
                <td></td>
            <td>
			

			
			
			
			
<div id="hits"><script type="text/javascript" src="http://services.webestools.com/cpt_visitors/10535-6-7.js"></script></div>

<div  id="rules">
<a href="images/rules.png">Rules.</a>
</div>
<div  id="faq">
<a href="images/faq.png">F.A.Q.</a>
</div>
<div id="like">
<iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2FiCardCounting.com&amp;width=360&amp;layout=standard&amp;action=like&amp;show_faces=true&amp;share=true&amp;height=80&amp;appId=1377902252448914" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:80px;" allowTransparency="true"></iframe>
</div>
<audio id='sound'></audio>
            </td>
            </tr>
        </table>
		<div id="b1"></div>
<div id="b2"></div>
<div id="b3"></div>
<div id="b4"></div>
<div id="b5"></div>
<div id="b6"></div>
</font>
    </body>
</html>
