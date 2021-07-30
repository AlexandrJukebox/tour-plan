<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subscribe = $_POST['subscribe'];

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Подписчик:</b>$subscribe<br>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
   // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com '; // SMTP сервера вашей почты
    $mail->Username   = 'goodworker219@gmail.com'; // Логин на почте
    //$mail->Host       = 'smtp.yandex.ru '; // SMTP сервера вашей почты
    //$mail->Username   = 'alexandrworkfreelans@yandex.ru'; // Логин на почте
    $mail->Password   = 'zlgljjuqnyywogto'; // Пароль на почте //ivygygtpymvrhwmh
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('goodworker219@gmail.com', 'Alexandr G.'); // Адрес самой почты и имя отправителя
    //$mail->setFrom('alexandrworkfreelans@yandex.ru', 'Alexandr G.'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('cashalexg@yandex.ru'); // Ещё один, если нужен
    $mail->addAddress('321gizatulin@gmail.com'); // Ещё один, если нужен
    $mail->addAddress($subscribe); // Ещё один, если нужен

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: subscribe.html');