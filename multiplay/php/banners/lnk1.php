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
		<center>
		<td><h1><b>Update Link 1</b></h1><br><br>
        <b>We just erased the address you had set as the link for the banner below</b><br>
        <b>"Enter the location you want people to go to if they click on this banner"</b><br></td>
        <br><br><br>
<?php
        echo '<form method="POST" action="" enctype="multipart/form-data">';
		echo "<table border=1 bordercolor=black cellpadding=5 cellspacing=0><tr>";
		echo "<td>Account ID: " .$row['userid'] . ".....  " . $row['fname'] . " " . $row['lname'] . "<br /></td><td></td><td>Website URL The Banner Is Marketing</td><td></td></tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnk'] . "\">       <img src=\"../upload/" . $row['gfx'] . "\"></a></td>      <td></td><td><input type=\"text\" maxlength=\"125\" name=\"lnk\" placeholder=\"http://iCardCounting.com\"/></td><td><input type=\"submit\" value=\"Update Link 1\" name=\"submit\" /></td>";
		echo '</form>';
		$stmt = $pdo->prepare("UPDATE banners SET lnk=:lnk");
        $stmt->bindValue(':lnk', $_POST['lnk'], PDO::PARAM_STR);
	    $stmt->execute();
        }	
        if($_POST)
        header('Location:index.php');//To redirect
		exit;	
}
catch(PDOException $e)
{
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();
	
}

?>
		</center>