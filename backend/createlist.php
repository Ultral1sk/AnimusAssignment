<?php 

require 'connect.php';
if(isset($_POST['submit']))
{	 
	 $email = $_POST['email'];
	 $land = $_POST['land'];
	 $ort = $_POST['ort'];
	 $strase = $_POST['strase'];
	 $PLZ = $_POST['PLZ'];
	 $datum = $_POST['datum'];
	 $sql = "INSERT INTO wohnunginfo (email, land, ort, strase, PLZ, datum)
	 VALUES ('$email','$land','$ort','$strase', $PLZ, $datum)";
	 if (mysqli_query($con, $sql)) {
		echo "New record created successfully !";
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($con);
	 }
	 mysqli_close($con);
}
?>