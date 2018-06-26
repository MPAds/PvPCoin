<?php
include '../include/db.php';

session_start();
try {
    if ($_SESSION['userid'])
        $pdo->beginTransaction();
    $sql = "SELECT * FROM banners";
    
    foreach ($pdo->query($sql) as $row) 
	   {
        
?>
<html>
<head>
  <style>
        .back {
            background-image: url("../images/memberback.png");
            background-repeat: no-repeat;
            background-attachment: float;
            background-position-x: center;
            background-position-y: top;
        }
  </style>
</head>

<body class="back" allign="center">
<center><br><br><br><br><br><br><br>

<td>
<h1><b>Banner 3</b></h1><br><img src="../upload/<?php
        echo $row["gfxthree"];
?>"></a><br>
Banner 3 Current Allocated Impressions: <?php
        echo $row["gfxthreeimps"];
?>
<h4>20 Credit = 1 Impression (100 Impressions = 3.25 rounds/100 hands of play)</h4><br>

<font style="background-color: yellow;"<h1><b>Your Game Credits = <?php
        echo $row["money"];
?></b></h1></font>
</td>
        

<br>
		

<form method="POST" action="imps3process.php" enctype="multipart/form-data">
<h4><b>Enter into step 1 the number of impressions you would like to set, and then click 'Set Impressions'!</b></h4>
<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
  <tr><td>Total Impressions Available</td><td>Step 1</td>

    <td>Step 2</td>
	<td>Account ID: <?php
        echo $row["userid"];
?>  <?php
        echo $row["fname"];
?>  <?php
        echo $row["lname"];
?></td>

  </tr>


  <tr>
    <td><?php
        echo $row["impressions"];
?></td>
    <td><input type="text" maxlength="125" name="imps" >
	    <input type="hidden" maxlength="125" name="impressions" 
		       value="<?php echo $row['impressions'];?>">
	    <input type="hidden" maxlength="125" name="gfxthreeimps" 
		       value="<?php echo $row['gfxthreeimps'];?>"></td>
    <td><input type="submit" value="Set Impressions" name="submit" ></td>
    <td><a href="buyimps.php"><button>Exchange Credits For Impressions Here</button></a></td>
  </tr>
</table>
</form>

</center>
</body>
</html>
<?php
}
}
catch(PDOException $e)
{
	$stmt->rollback();
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();
}
?>
