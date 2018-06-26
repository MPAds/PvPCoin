<?php
include '../include/db.php';

session_start();
try {
if ($_SESSION['userid'])
    $pdo->beginTransaction();
    $sql2 = "SELECT money FROM stats";
	
	    foreach ($pdo->query($sql2) as $row)
      {
echo "MONEY: " .$row['money'] . ".....  ";

}
}
catch(PDOException $e)
{
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();
}
?>