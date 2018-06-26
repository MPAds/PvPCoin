<html xmlns="http://www.w3.org/1999/xhtml">  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  

<title>Your Profile</title>

</head>  

<body style="background-attachment: fixed; background-repeat: no-repeat;" background="images/board.png" alt="Card Counting Background" width="100%"> 
<div id="main">
     <?php
	 session_start();
     include '../include/db.php';
      if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['username']))
   {
     ?>
 <table width="100%"><tr><td align="center" bgcolor="white">
      <tr><td>
     <p>Welcome back <code><?=$_SESSION['username']?></code>! Your registered email address is <code><?=$_SESSION['email']?></code>.</p>
	 <p><font size="15">What would you like to do? Please select one below!</font><br><br>
	<font size="6"> View the banners I currently have set up 
		   <a href="http://www.iCardCounting.com/multiplay/php/banners/banner_select.php">View My Banners</a></font><br>	   
	<font size="6"> Update where people go when they click on one of my banners 
		   <a href="http://www.iCardCounting.com/multiplay/php/banners/banner_update.php">Update Where I want to Send Clickers</a></font><br>
		   	   
	<font size="6"> Upload banners I want to use 
		   <a href="http://www.iCardCounting.com/upload.html">Upload Banners To My Account</a></font>
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
//		$_SESSION['lastlog'] = $lastlog;  
//        $_SESSION['ipaddress'] = $ipaddress;
         
        echo "<h1>Success</h1>";
        echo "Redirecting to multi-play board.";
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
	   <h1>MEMBERS LOGIN <br><br><img src="images/cardcountinglogo2.png" alt="Card Counting Logo"></h1><br>
           <font size="2"> Best viewed In Firefox <br>
		   <a href="http://www.iCardCounting.com/multiplay/index.php">Click Here To Play Against Others And Win Credits</a></font>
   <p>You Must Log In To Enter The Members Area,<br>
   or <a href="register.php">click here to register</a>.</p>
	
    <fieldset><br>
        <label for="username">Username:</label><input type="text" name="username" id="username" /><br /><br>
        <label for="password">Password:</label><input type="password" name="password" id="password" /><br /><br>
        <input type="submit" name="login" id="login" value="Login" />
    </fieldset>
    </form>
   <table width="100%"><tr><td align="center" bgcolor="white"><p><br>Your profile area allows you to exchange credits for impressions!<br>
   Appoint impressions to the banners you want in the game board!</p></td></tr></table>
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