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

// I want the leaderboard to display by highest credits to lowest credits. I would like the members names to be a hyperlink to
// their own stats pages so other players can view their stats. Please refer to the email for the stats I would like displayed.
// The leader board will also display the players logon status. Red= offline, green = online. I also would like the leaderboard
// to display which game board the player last played on. Please refer to the email for other information about the leaderboard.
	
?>
