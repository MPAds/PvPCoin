<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Registration Test Page</title>
</head>
<body style="background:url(../images/indexvalentinelogin.png); background-repeat:no-repeat; background-position:top center; position:relative; background-color:#000;"> 
<table align="center" width="300" cellpadding="4" cellspacing="4">

<tr><td align="center" colspan="2" width="100" height="625"></td>
        <td align="center" colspan="2" width="100"  height="50" bgcolor="white">
<form method="post" action="registernew.php" >
	   <h1>Select a card<br>place a wager<br>repeat <br><br>45 second timer<br></h1>
     
   <p>Beat the house? Register to save your score,<br>
   and <a href="index.php">play against others.</a>.</p>
<table>
<tr><td>
choose a username: <br>
enter an email: <br>
choose a password: <br>
</td>
<td>
<input type="text" maxlength="30" required autofocus name="username" /><br>
<input type="text" maxlength="700" required name="email" /><br>
<input type="password" maxlength="100" required name="password" /><br>
</td>
</tr>
</table>
<br>
<input type="submit" value="Register" name="submit" />
</form>
<table width="400" align="center"><tr><td align="center" bgcolor="white">Earn and save, up to 10,000 credits daily from solitaire play.<br>
   Log in, and complete against others to win their credits through MULTIPLAYER!</td></tr></table>
	    </td>
	<td align="center" colspan="2" width="60"  height="100">&nbsp;</td>
</tr>

</table>
</body>
</html>
<?php 
// Upload this file inside the /htdocs/
    include("../include/db.php"); 

	if (isset($_POST['submit']))
     {
        $username = mysql_real_escape_string($_POST['username']);
        $email = mysql_real_escape_string($_POST['email']);
        $password = md5($_POST['password']);
		
		
//        $username = protect($_POST['username']);
//        $email = protect($_POST['email']);
//        $password = protect($_POST['password']);

        if (strlen($username)>30){
		    echo "Username must be less then 30 characters!";
		}elseif (strlen($email)>700){
		    echo "Email must be less then 700 characters!";
		}
//        Check to see if username exists 
          $sql = mysql_query("SELECT username FROM usersystem WHERE username = '".$username."'");
		  
        if (mysql_num_rows($sql)>0) 
            { 
             die ("Username Taken."); 
            }
		$today = date("Y-m-d H:i:s");
		$user_ip = $_SERVER['REMOTE_ADDR'];
        mysql_query("INSERT INTO usersystem (userid, username, password, email, lastlog, signup_date, ipaddress) VALUES (NULL,'$username','$password','$email', CURRENT_TIMESTAMP, NOW(),'$user_ip')") or die (mysql_error()); 

    	$query2 = mysql_query("INSERT INTO `players`.`stats` (`userid`, `money`, `impressions`, `handswon`, `handslost`, `largestpotwon`, `totalnumberofwagersplaced`, `totalofallwagersplaced`, `totaloverroundpaid`, `lifetimewinnings`, `lifetimelosses`) VALUES (last_insert_id(), '2000', '15', '0', '0', '0', '0', '0', '0', '2001', '1')") or die (mysql_error()); 
        $query3 = mysql_query("INSERT INTO `players`.`banners` (`userid`) VALUES (last_insert_id())") or die (mysql_error()); 
		echo "Account created. Welcome, you will be redirected in 5 seconds to the game.";
		//	mysql_query("INSERT INTO `players`.`stats` (`userid`, `money`, `impressions`, `handswon`, `handslost`, `largestpotwon`, `totalnumberofwagersplaced`, `totalofallwagersplaced`, `totaloverroundpaid`, `lifetimewinnings`, `lifetimelosses`) VALUES (last_insert_id(), '2000', '15', '0', '0', '0', '0', '0', '0', '2001', '1')") or die (mysql_error()); 	
	//redirect
	header( "refresh:1;url=http://www.icardcounting.com/multiplay/" );
    } 
	//redirect
// header("Location: http://www.icardcounting.com/multiplay/");
?>