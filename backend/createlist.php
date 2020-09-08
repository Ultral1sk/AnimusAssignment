<?php 

require 'connect.php';

// because our data is passing adjacent format that is why we are using file_get_contents
$postData = file_get_contents('php://input');

if(isset($postData) && !empty($postData))
{

  $request = json_encode($postData);


  $email = $con->real_escape_string($_POST['email']);
  $land = $con->real_escape_string($_POST['land']);
  $ort = $con->real_escape_string($_POST['ort']);
  $strase = $con->real_escape_string($_POST['strase']);
  $PLZ = $con->real_escape_string($_POST['PLZ']);
  $datum = $con->real_escape_string($_POST['datum']);


//Store.
$sql = "INSERT INTO `wohnunginfo` (
    email,
    land,
    ort,
    strase,
    PLZ,
    datum
) VALUES ('$email', '$land', '$ort', '$strase', '$PLZ', '$datum')";

    if(mysqli_query($con,$sql)) {
       http_response_code(201);
    }
     else {
       http_response_code(422);
    }
}

?>