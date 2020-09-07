<?php 

require 'connect.php';

$id = $_GET['id'];

// Get By id.
$sql = "SELECT * FROM `wohnunginfo` WHERE `id` = '{$id}' LIMIT 1";

    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);

    echo $json= json_encode($row);

    exit;

?>