<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">  
<head>  
<TITLE>Gamble credits card counting single player card counting card game</TITLE>
<META NAME="description" CONTENT="Gambling game. In this card game, gamble game credits against opponents to win their credits.">
<META NAME="robot" CONTENT="index,follow">
<META NAME="copyright" CONTENT="ICardCounting is a trademark and copyright © 2013-2015 All Rights Reserved.">
<META NAME="author" CONTENT="Edward Nolan">
<META NAME="keywords" CONTENT="gamble, gambling, gaming, card game, new card game">
<META NAME="language" CONTENT="English">
<META NAME="revisit-after" CONTENT="15">
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="game.css">

    </head>  
    <body style="background-attachment: fixed; background-repeat: no-repeat;" alt="Card Counting Background" width="100%"> 

	
	<div id="main">
     <?php
      include("../include/db.php");
      if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['username']))
   {
     ?>
 <table width="100%"><tr><td align="center" bgcolor="white">
     <h1><a href="http://www.iCardCounting.com/multiplay/index.php">Click Here To Go To Multi Player Game Board</a></h1>
     <p>Thanks for logging in <code><?=$_SESSION['username']?></code>! Your registered  email address is <code><?=$_SESSION['email']?></code>.</p>
      </td></tr></table>
     <?php
   }
elseif(!empty($_POST['username']) && !empty($_POST['password']))
{
    $username = mysql_real_escape_string($_POST['username']);
    $password = md5(mysql_real_escape_string($_POST['password']));
     
    $checklogin = mysql_query("SELECT * FROM usersystem WHERE username = '".$username."' AND password = '".$password."'");
     
    if(mysql_num_rows($checklogin) == 1)
    {
        $row = mysql_fetch_array($checklogin);
        $email = $row['email'];
         
        $_SESSION['username'] = $username;
        $_SESSION['email'] = $email;
        $_SESSION['LoggedIn'] = 1;
		$_SESSION['lastlog'] = $lastlog;  
        $_SESSION['ipaddress'] = $ipaddress;
         
        echo "<h1>Success</h1>";
        echo "Redirecting to multi-player game area.";
        echo "<meta http-equiv='refresh' content='=2;index.php' />";
    }
    else
    {
        echo "<h1>Error</h1>";
        echo "<p>Sorry, your account could not be found. Please <a href=\"index.php\">click here to try again</a>.</p>";
    }
}
else
{
    ?>
     
<table align="center" width="100%" cellpadding="4" cellspacing="4">

<tr><td align="center" colspan="2" width="30%" height="605"></td>
        <td align="center" colspan="2" width="30%"  height="40" bgcolor="white">
     
    <form method="post" action="index.php" name="loginform" id="loginform">
	   <h1>WELCOME TO <br><br><img src="images/cardcountinglogo2.png" alt="Card Counting Logo"></h1><br>
           <font size="2"> Best played In Firefox </font><br>
   <p>Thanks for visiting! Please either login below,<br>
   or <a href="register.php">click here to register</a>.</p>
	
    <fieldset><br>
        <label for="username">Username:</label><input type="text" name="username" id="username" /><br /><br>
        <label for="password">Password:</label><input type="password" name="password" id="password" /><br /><br>
        <input type="submit" name="login" id="login" value="Login" />
    </fieldset>
    </form>
   <table width="100%"><tr><td align="center" bgcolor="white"><p><br>An on-line pari-mutual strategy card game.<br>
   Bet against thousands of players from around the world!</p></td></tr></table>
	    </td>
	<td align="center" colspan="2" width="30%"  height="100">&nbsp;</td>
</tr>

</table>

   <?php
}
?>
 
</div>
</body>
</html>

