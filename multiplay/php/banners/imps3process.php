<?php
include '../include/db.php';

session_start();
try {
    if ($_SESSION['userid'])
        $pdo->beginTransaction();
{    
        
        if ($imps > $impressions) {
            echo "Select a lower number";
            exit;
        } else {
            
            $_POST["impressions"] = $_POST["impressions"] - $_POST['imps'];
            $_POST['imps'] = $_POST["gfxthreeimps"] + $_POST['imps'];
            
            if ($_POST) {
                
                $stmt = $pdo->prepare("UPDATE banners SET impressions=:impressions, gfxthreeimps=:imps");
                $stmt->bindValue(':impressions', $_POST['impressions'], PDO::PARAM_STR);
                $stmt->bindValue(':imps', $_POST['imps'], PDO::PARAM_STR);
                $stmt->execute();
                
        if($_POST)
        header('Location:index.php');//To redirect
		exit;             }

        }
    }
}
catch (PDOException $e) {
    $pdo = null;
    /*** close the database connection ***/
    echo $e->getMessage();
}
?>


