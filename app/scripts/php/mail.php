<?php
    $data = json_decode(file_get_contents("php://input"));
    $to = mysql_real_escape_string($data->to);
    $from = "From: " . mysql_real_escape_string($data->from) . "\r\n";
    $message = mysql_real_escape_string($data->message);
    $subject = mysql_real_escape_string($data->subject);

mail($to, $subject,$message, $from);
?>