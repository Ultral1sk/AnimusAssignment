<?php 

require 'connect.php';
$postData = file_get_contents('php://input');
  echo $postData;

 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (isset($_POST['email']) && isset($_POST['land'])) {
      $email = $con->real_escape_string($_POST['email']);
      $land = $con->real_escape_string($_POST['land']);
      $ort = $con->real_escape_string($_POST['ort']);

      $con->query("INSERT INTO customers (email,land,ort) VALUES ('$email', '$land', '$ort')");
     
      exit(json_encode(array("status" => 'success')));
  } else
      exit(json_encode(array("status" => 'failed', 'reason' => 'Check Your Inputs')));
} 
?>