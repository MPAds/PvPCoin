<?php
include '../include/db.php';

try {
    /*** begin the transaction ***/
    $pdo->beginTransaction();
	
    /*** The SQL SELECT statement ***/
    $sql = "SELECT * FROM leaderboard ORDER BY money DESC, ts ASC LIMIT 35";
    foreach ($pdo->query($sql) as $row)
        {	
$result_length = mysql_num_rows($result);
for($i = 0; $i < $result_length; $i++)
{
     $row = mysql_fetch_array($result);
     echo $row['name'] . "\t" . $row['money'] . "\n";
}		
    /*** close the database connection ***/
    $pdo = null;
}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }

?>

Hyperlink to members profile page..