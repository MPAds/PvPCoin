<?php
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
<center>
<table>
<tr>
		<center>
		<td><h1><b>Your Banner Campaign</b></h1>
		<h6>20 Credit = 1 Impression (100 Impressions = 3.25 rounds/100 hands of play)</h6>
		<p><b>YOUR CURRENT GAME CREDITS: <?php include 'stats.php';?></b></p>
        <p><b>"You have 623 banner impressions in your account."</b></p>
		</td>
		</center>
</tr>
</table>
</center>
<?php		

		echo "<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
		<tr>";
		echo "<td>Account ID: " .$row['userid'] . ".....  " . $row['fname'] . " " . $row['lname'] . "<br /></td>
		<td></td><td>Website URL The Banner Is Marketing</td><td></td></tr>
		
		<tr>";
		echo "<td><a href=\"" .$row['banner_link'] . "\">
		<img src=\"" . $row['banner_image_url'] . "\"></a></td>      <td></td><td>"  .$row['banner_link'] . "</td><td><a href=lnk1.php><button>Update Link 1</button></a></td>";
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
