<html xmlns="http://www.w3.org/1999/xhtml">  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
    <style>
        .back {
            background-image: url("../images/memberback.png");
            background-repeat: no-repeat;
            background-attachment: float;
            background-position-x: center;
            background-position-y: top;
			background-size: 100% 100%;
        }
    </style>
<title>Banner exchange card game member section</title>

</head>  
<body class="back" allign="center">
<center>
<table>
<tr>
		<center><br><br><br>
		<td><h1><b>Your Banner Campaign</b></h1>
		<h4>20 Credit = 1 Impression (100 Impressions = 3.25 rounds/100 hands of play)</h4>
        <br><br><br>
		</td>
		</center>
</tr>
</table>
<div id="main">
     <?php
	 session_start();
     include '../include/db.php';
      if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['username']))
   {

   
 

include '../include/db.php';

session_start();
try {
if ($_SESSION['userid'])
    $pdo->beginTransaction();
    $sql = "SELECT * FROM banners";
    foreach ($pdo->query($sql) as $row)
        {
//    echo '<form method="POST" action="" enctype="multipart/form-data">';		

?>


<?php		

		echo "<table border=1 width=70% bordercolor=black cellpadding=5 cellspacing=0>
		<tr>";
		echo "<td>Account ID: " .$row['userid'] . ".....  " . $row['fname'] . " " . $row['lname'] . "<br /></td>
		<td></td><td>Allocated Impressions</td></tr>
		
		<tr>";
		echo "<td>"  .$row['banner_link'] . "</td><td><a href=lnk1.php><button>Update Link</button></a></td>";
        echo "</tr>
		
				<tr>";
		echo "<td><a href=\"" .$row['banner_link'] . "\">
		<img src=\"../upload/" . $row['banner_image_url'] . "\"></a>      Views:" . $row['views'] . "  Clicks:". $row['clicks'] . "</td><td><a href=banner1.php><button>Update Banner 1</button></a></td><td>"  .$row['gfximps']."&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=imps1.php><button>Set</button></a></td> ";
        echo "</tr>

				<tr>";
		echo "<td>Total Unallocated Impressions: </td><td>" . $row['impressions'] . " </td><td><a href=stats_select.php><button>Check Your Stats</button></a></td>";
		echo "</tr></table>";
        }	

}
catch(PDOException $e)
{
	$stmt->rollback();
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();
}
?>
</center>   
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
        echo "We are now redirecting you to your banner profile.";
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
	   <h1>MEMBERS LOGIN <br><br><img src="../images/cardcountinglogo2.png" alt="Card Counting Logo"></h1><br>
           <font size="2"> Best viewed In Firefox <br>
		   <a href="http://www.iCardCounting.com/multiplay/">Click Here To Play Against Others And Earn Credits</a></font>
   <p>You Must Log In To Enter The Members Area,<br>
   or <a href="register.php">click here to register</a>.</p>
	
    <fieldset><br>
        <label for="username">Username:</label><input type="text" name="username" id="username" /><br /><br>
        <label for="password">Password:</label><input type="password" name="password" id="password" /><br /><br>
        <input type="submit" name="login" id="login" value="Login" />
    </fieldset>
    </form>
   <table width="100%"><tr><td align="center" bgcolor="white"><p><br>Our members area allows you to exchange credits for impressions!<br>
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