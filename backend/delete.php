<?php 

require 'connect.php';

$id=$_GET['id'];
$sql = "DELETE FROM `wohnunginfo` WHERE `id` = '{$id}' LIMIT 1";

    if(mysqli_query($con, $sql)) 
    {
      return http_response_code(204);
    }
    else 
    {
      return http_response_code(422);    
    }

?>