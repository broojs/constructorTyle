<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['username'];
$email = $_POST['usermail'];
$number = $_POST['userphone'];
$text = json_decode($_POST['text']);
$canvas = $_POST['canvas'];
$infoType = $_POST['infoType'];
$infoMaterial = $_POST['infoMaterial'];
$infoForm = $_POST['infoForm'];
$infoTexture = $_POST['infoTexture'];
$infoWidth = $_POST['infoWidth'];
$infoHeight = $_POST['infoHeight'];
$infoSquare = $_POST['infoSquare'];
$infoAmount = $_POST['infoAmount'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'ddt3kirill201401@mail.ru'; // Логин на почте
    $mail->Password   = 'brooks2017'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('ddt3kirill201401@mail.ru', 'Конструктор плитки'); // Адрес самой почты и имя отправителя
    $mail->addAttachment(__DIR__ . '<img src="img/qwe.jpg">');
    // Получатель письма
    $mail->addAddress('ddt3kirill201401@mail.ru');  


 /*  // Прикрипление файлов к письму
if (!empty($_FILES['myfile']['name'][0])) {
    for ($ct = 0; $ct < count($_FILES['myfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['myfile']['name'][$ct]));
        $filename = $_FILES['myfile']['name'][$ct];
        if (move_uploaded_file($_FILES['myfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {

            $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
        }
    }   
}*/

        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Конструктор плитки';
        $mail->Body    = "<b>Имя:</b> $name <br>
        <b>e-mail:</b> $email<br><br>
        <b>Номер телефона:</b> $number<br><br>
        <b>Итоговый образ плитки: <img src='$canvas'</b><br><p>Тип: $infoType</p><p>Материал: $infoMaterial</p><p>Форма: $infoForm</p><p>Текстура: $infoTexture</p><p>Длина: $infoWidth Ширина: $infoHeight</p><p>Площадь участка: $infoSquare</p><p>Количество: $infoAmount</p>";


// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}


?>