
    <?php
//    1). Setting up database and table using phpMyAdmin
//    our database name is players, with an inside table name usersystem

    //CREATE TABLE `adnolan_players`.`usersystem` (     // I don't know why this says adnolan instead of ednolan ?
    //`userid` INT NOT NULL AUTO_INCREMENT , 
   // `username` VARCHAR( 50 ) NOT NULL , 
   // `password` VARCHAR( 32 ) NOT NULL , 
   // `email` VARCHAR( 50 ) NOT NULL , 
   // PRIMARY KEY ( `userid` )
  //  )
	
//    2). Create the first php file db.php
//    This first PHP file will be the "structure" file. 
//    This file has our functions and database connectivity in it. 
//    This file will later be included at the top of every single PHP file on our website.

//   3). We need this header so the user is redirected and can start playing

//   4). Create the register.php and login.php pages


    session_start();  // This function allow us to maintain our sessions with the login fields later.
	
mysql_connect("localhost","ednolan","JokerGamesLLC2015>^9");
    mysql_select_db("ednolan_players");
    function user_login ($username, $password) { 
      $username = mysql_real_escape_string($username);      //take the username and prevent SQL injections 
            //begin the query 
        $pdo = mysql_query("SELECT * FROM usersystem WHERE username = '".$username."' AND password = '".$password."' LIMIT 1"); 
        $rows = mysql_num_rows($sql);                         //check to see how many rows were returned 
      if ($rows<=0 ) { 
         echo "Incorrect username/password"; 
                     }
      else {   // have them logged in 
           $_SESSION['username'] = $username; 
           } 
                                               }

?>
