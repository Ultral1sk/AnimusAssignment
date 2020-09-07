<?php 


// test folder to see if im fetching the data from DB
require 'connect.php';

$wohnunginfo = [];
$sql = "SELECT * FROM wohnunginfo";

  if($result = mysqli_query($con,$sql)){

    $cr = 0;

    while($row = mysqli_fetch_assoc($result)) {

      
      $wohnunginfo[$cr]['id']     = $row['id'];
      $wohnunginfo[$cr]['admin']  = $row['admin'];
      $wohnunginfo[$cr]['email']  = $row['email'];
      $wohnunginfo[$cr]['land']   = $row['land'];
      $wohnunginfo[$cr]['ort']    = $row['ort'];
      $wohnunginfo[$cr]['strase'] = $row['strase'];
      $wohnunginfo[$cr]['PLZ']    = $row['PLZ'];
      $wohnunginfo[$cr]['datum']  = $row['datum'];
      $cr++;

    }

    print_r($wohnunginfo);
    // the incoming data should be parsed into json data
    // echo json_encode($wohnunginfo);
  }

  else {
    http_response_code(404);
  }

?>