<?php
session_start();
//include 'members/include/db.php';

$dsn = "mysql:host=localhost;dbname=ednolan_players;charset=utf8";
$opt = array(
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
);
//$pdo = new PDO($dsn, 'ednolan_Vegas', 'LoveMyWife!', $opt);
$pdo = new PDO($dsn, 'ednolan', 'JokerGamesLLC2015>^9', $opt);

try {
//if ($_SESSION['userid'])
    $pdo->beginTransaction();
  //  $sql = "SELECT * FROM banners ORDER BY RAND() LIMIT 6";
    $sql = "SELECT * FROM test_usersystem ORDER BY RAND() LIMIT 6";
//	$x = 0;
	$array = array();
	    foreach ($pdo->query($sql) as $row) {
//		($x++);
		$array[] = $row;
	}
}
catch(PDOException $e)
{
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();	
}

echo json_encode($array);

?>
