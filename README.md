# PvPCoin
The single player version is written in javascript, css, and html. 
The single player version will reward players with .1 of a coin actual coins for each wager, win or lose. At the end of each hand of play the game CPU mines an additional block for the player and rewards them with .2 of a coin. The blocks are stored in an array[]. This is simply TESTNET right now. The blockchain connections work. The getIPwallet.js creates the player wallet based on their IP. I am currently working on learning how to send coins from wallet to wallet via WebRTC. My vision is to roll out 777,777,777 coins. Each hand of play is 45 seconds long, and a player can wager multiple times during a hand. It's easy to earn roughly 1 coin per hand so long as a player wagers at least 10 times within the hand. Premine will be 7,777,777 coin. Roughly 1% premine. If you refresh your browser all previous transactions, and coins disapear. New wagers are needed to start the chain up again. There is no need to actually play the game to earn coins due to the end of hand mining ability now!

Once all the coins are produced players will then be able to use those coins in the multiplayer version and battle head to head with other players. Once all the coins are produced, players will then be able to buy and sell through an exchange.

<img src="/images/preview.png" />

The game flows nicely and is easy to understand.

Players will be using play money to wager. Each wager does not change the odds in the single player version. 
Odds do change however, at the start of each new hand of play.
Players will only see their bets durning this single player version against the house.
Player can earn as much as roughly 500 coins per 24 hours, should they play all day/night long.
A player wins game money based on the going odds if they guess correctly.

If the player runs out of money they simply can wager again for more free addition money. 

A round of play consists of 37 hands of play. Players can wager on suits as well as the numbers. At the end of a round there is a 100 second commercial, or pause. The game resets after 100 seconds so the player can continue playing.

A transaction is simply a bet. In this version the player will not be allowed to send coins to another wallet, or receive
coins from another player. These coins will not be spendable in anyway within this version of play.

When the game goes to livenet, the single player version will be simply a coin roll out phase and coins will not exceed the total.

During the multiplayer version , POW will be implimented to secure the network. Details have yet been determined.

During multiplay, players will use their coins during game play. The idea is to try and win other peoples coins through
play. Players will wager on what they think might be the next card being turned over from the top of the deck. During
multiplay, each bet changes the odds, and players will see all the bets as they enter the board. There is a built in leader board as well to allow players of the multiplay to view other players win/loss percentages, and more through player profile page.

<img src="/multiplay/images/profilepage.png" />

Thanks for your time, and I hope you enjoy what I have created so far! PLease feel free to fork and help with the develpment.
