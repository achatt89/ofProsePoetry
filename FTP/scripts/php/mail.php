<?php
    $data = json_decode(file_get_contents("php://input"));
    $to = $_REQUEST['to'];
    $from = "From: " . $_REQUEST['email'] . "\r\n";
    $message = $_REQUEST['message'];
    $subject = $_REQUEST['subject'];

$response = mail($to, $subject,$message, $from);

echo $response;
?>