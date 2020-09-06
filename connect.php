<?php
	$server_name='localhost';
	$user_name='root';
	$user_pass="";
	$database="wohnunginfo";

	$connection= new mysqli($server_name, $user_name, $user_pass, $database);

	if($connection->connect_error) {
		die("Unable to connect".$connection->connection_error);
	}

	echo "Database connection established";

?>

