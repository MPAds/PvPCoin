<?php
include '../include/db.php';

try {
    $pdo->beginTransaction();
    $sql = "SELECT * FROM banners";
	
    foreach ($pdo->query($sql) as $row)
        {
        echo "<table><tr>";
		echo "<td>" .$row['userid'] . "<a href=" .$row['banner_link'] . "><img src=" . $row['banner_image_url'] . "></a>";
        echo "</td>";
        echo "</tr></table>";
        }	

    $pdo = null;
}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }
?>