<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_tel'];
$email = $_POST['user_email'];
$growUp = $_POST['user_growUp'];
$text = $_POST['user_text'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output



$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'psychoreiting@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'BR6cj2dYQWrx7wG4ceTs'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('psychoreiting@mail.ru'); // от кого будет уходить письмо?

// liZXYaAie1^3


$mail->addAddress('uspokoisyarus@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Пользователь оставил заявку на сайте:'. '<br><br>ФИО: ' .$name . '<br>Телефон: ' .$phone. '<br>Почта: ' .$email. '<br>Возраст: ' .$growUp. '<br>Проблема: ' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
} else {
    header('location: thankYou.html');
}
?>