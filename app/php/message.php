<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ .'/phpmailer/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ .'/phpmailer/phpmailer/src/SMTP.php';

header('Content-type: application/json','charset=utf-8');

require __DIR__ . '/../config/gmail.inc';

$post_data = file_get_contents("php://input");
$data = json_decode($post_data);

if($data->name=="" || $data->email=="" || $data->message==""){
    echo "Try again, invalide data";
    exit();
}


$mail = new PHPMailer;
try{
    //server settings
    $mail->SMTPDebug=0;
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 465;
    $mail->Username = $gmail;
    $mail->Password = $pwd;

    //mail body
    $mail->setFrom($gmail, $name);
    $mail->Subject = "Message from ".$data->name;
    $mail->Body = "Email: ".$data->email.", \r\n Message:  ".$data->message;
    $mail->addAddress($gmail_send);

   //send the message, check for errors
    $mail->Send();

    echo json_encode('Message has been sent');

}catch (Exception $e){

    echo json_encode('Message could not be sent. Please try later');
}

?>
