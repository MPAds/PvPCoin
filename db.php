
<?php
//    1). Setting up database and table using phpMyAdmin
//    our database name is players, with an inside table name usersystem and stats

    CREATE TABLE `players`.`usersystem` (
    `userid` INT NOT NULL AUTO_INCREMENT , 
    `username` VARCHAR( 30 ) NOT NULL , 
    `password` VARCHAR( 100 ) NOT NULL , 
    `email` VARCHAR( 700 ) NOT NULL , 
	'lastlog' DATETIME NOT NULL,
    'signup_date' DATETIME NOT NULL,
    'activated' ENUM('0','1') NOT NULL DEFAULT '0',
    'avatar' VARCHAR(255),
    'birthday' VARCHAR(255),
    'gender' VARCHAR(12),
    'ipaddress' VARCHAR(255),
    PRIMARY KEY ( `userid` )
    ) ENGINE = MYISAM ;
	
    CREATE TABLE `players`.`stats` (
    `userid` INT NOT NULL ,
    `money` INT( 11 ) NOT NULL ,
    `handswon` INT( 11 ) NOT NULL ,
    `handslost` INT( 11 ) NOT NULL ,
    `largestpotwon` INT( 11 ) NOT NULL ,
    `totalnumberofwagersplaced` INT( 11 ) NOT NULL ,
    `totalofallwagersplaced` INT( 11 ) NOT NULL ,
    `totaloverroundpaid` INT( 11 ) NOT NULL ,
    PRIMARY KEY ( `userid` )
    ) ENGINE = MYISAM ;
	
	CREATE TABLE `players`.`activate` (
`userid` INT( 11 ) NOT NULL AUTO_INCREMENT ,
`username` VARCHAR( 255 ) NOT NULL ,
`token` VARCHAR( 255 ) NOT NULL ,
PRIMARY KEY ( `userid` )
) ENGINE = MYISAM ;
	
//    2). Create the first php file db.php
//    This first PHP file will be the "structure" file. 
//    This file has our functions and database connectivity in it. 
//    This file will later be included at the top of every single PHP file on our website.

//   3). We need this header so the user is redirected and can start playing

//   4). Create the register.php and login.php pages


    session_start();  // This function allow us to maintain our sessions with the login fields later.
	
//    mysql_connect("localhost", "username of your database", "password of database");  // Now connect to database
	mysql_connect("mysqlv110", "kamdotplayers", "Maria1n-ILoveU");
    mysql_select_db("players");
    function user_login ($username, $password) { 
      $username = mysql_real_escape_string($username);      //take the username and prevent SQL injections 
            //begin the query 
        $sql = mysql_query("SELECT * FROM usersystem WHERE username = '".$username."' AND password = '".$password."' LIMIT 1"); 
        $rows = mysql_num_rows($sql);                         //check to see how many rows were returned 
      if ($rows<=0 ) { 
         echo "Incorrect username/password"; 
                     }
      else {   // have them logged in 
           $_SESSION['username'] = $username; 
           } 
                                               }

?>