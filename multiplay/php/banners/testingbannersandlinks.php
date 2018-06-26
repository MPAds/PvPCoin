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
        <br><br><br>
		</td>
		</center>
</tr>
</table>

<?php		

		echo "<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
		<tr>";
		echo "<td>Account ID: " .$row['userid'] . ".....  " . $row['fname'] . " " . $row['lname'] . "<br /></td>
		<td></td><td>Website URL The Banner Is Marketing</td><td></td></tr>
		
		<tr>";
		echo "<td><a href=\"" .$row['lnk'] . "\">
		<img src=\"../upload/" . $row['gfx'] . "\"></a></td><td><a href=banner1.php><button>Update Banner 1</button></a></td><td>"  .$row['lnk'] . "</td><td><a href=lnk1.php><button>Update Link 1</button></a></td>";
        echo "</tr>

		<tr>";
		echo "<td>
		<a href=\"" .$row['lnktwo'] . "\">
		<img src=\"../upload/" . $row['gfxtwo'] . "\"></a></td><td><a href=banner2.php><button>Update Banner 2</button></a></td><td>"  .$row['lnktwo'] . "</td><td><a href=lnk2.php><button>Update Link 2</button></a></td>";
		echo "</tr>

		<tr>";
		echo "<td>
		<a href=\"" .$row['lnkthree'] . "\">
		<img src=\"../upload/" . $row['gfxthree'] . "\"></a></td><td><a href=banner3.php><button>Update Banner 3</button></a></td><td>"  .$row['lnkthree'] . "</td><td><a href=lnk3.php><button>Update Link 3</button></a></td>";
		echo "</tr>

		<tr>";
		echo "<td>
		<a href=\"" .$row['lnkfour'] . "\">
		<img src=\"../upload/" . $row['gfxfour'] . "\"></a></td><td><a href=banner4.php><button>Update Banner 4</button></a></td><td>"  .$row['lnkfour'] . "</td><td><a href=lnk4.php><button>Update Link 4</button></a></td>";
		echo "</tr>

		<tr>";
		echo "<td>
		<a href=\"" .$row['lnkfive'] . "\">
		<img src=\"../upload/" . $row['gfxfive'] . "\"></a></td><td><a href=banner5.php><button>Update Banner 5</button></a></td><td>"  .$row['lnkfive'] . "</td><td><a href=lnk5.php><button>Update Link 5</button></a></td>";
		echo "</tr>

		<tr>";
		echo "<td>
		<a href=\"" .$row['lnksix'] . "\">
		<img src=\"../upload/" . $row['gfxsix'] . "\"></a></td><td><a href=banner6.php><button>Update Banner 6</button></a></td><td>"  .$row['lnksix'] . "</td><td><a href=lnk6.php><button>Update Link 6</button></a></td>";
		echo "</tr>

				<tr>";
		echo "<td>
		<a href=http://www.icardcounting.com/multiplay/php/members/upload.php><button>Upload Your Banners</button></a></td><td></td><td><a href=stats_select.php><button>Check Your Stats</button></a></td>";
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