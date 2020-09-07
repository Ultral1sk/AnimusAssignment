<?php 

require 'connect.php';

// because our data is passing adjacent format that is why we are using file_get_contents
$postData = file_get_contents('php://input');

if(isset($postData) && !empty($postData))
{

  $request = json_decode($postData);

  $email  = mysqli_real_escape_string($con, $request->email);
  $land   = mysqli_real_escape_string($con, trim($request->land));
  $ort    = mysqli_real_escape_string($con, trim($request->ort));
  $strase = mysqli_real_escape_string($con, trim($request->strase));
  $PLZ =    mysqli_real_escape_string($con, $request->PLZ);
  $datum  = mysqli_real_escape_string($con, $request->datum);



//Store.
$sql = "INSERT INTO `wohnunginfo`(
    `email`,
    `land`,
    `ort`,
    `strase`,
    `PLZ`,
    `datum`

) VALUES ('${$email}', 
  '${$land}', 
  '${$ort}', 
  '${$strase}', 
  '${$PLZ}', 
  '${$datum}')
  ";

    if(mysqli_query($con,$sql)) {
       http_response_code(201);
    }
     else {
       http_response_code(422);
    }
}

?>