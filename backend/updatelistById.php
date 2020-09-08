<? php 

require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){


  $request = json_decode($postdata);


    print_r($request);

    $id = mysqli_real_escape_string($con, (int)$_GET['id']);
    $email = mysqli_real_escape_string($con, trim($request->email));
    $land = mysqli_real_escape_string($con, trim($request->land));
    $ort = mysqli_real_escape_string($con, trim($request->ort));
    $strase = mysqli_real_escape_string($con, trim($request->strase));
    $PLZ = mysqli_real_escape_string($con, int($request->PLZ));
    // $datum = mysqli_real_escape_string($con, $request->datum);

    $sql = "UPDATE `students` SET `email` ='$email', `land` ='$land', `ort`='$ort', `strase`='$strase', `PLZ`='$PLZ' WHERE `id` = '{$id}' LIMIT 1";
 
    if(mysqli_query($con, $sql))
    {
      http_response_code(204);
    }
    else {
      http_response_code(422);
    }

}

?>