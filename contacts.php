<?php
if (isset ($_POST['contactFF'])) {
  $to = "suinegne@gmail.com,a89823703090@ya.ru";
  $from = $_POST['contactFF'];
  $subject = "Заполнена контактная форма с ".$_SERVER['HTTP_REFERER'];
  $message = "Имя: ".$_POST['nameFF']."\nEmail: ".$from."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: Заявка с сайта".$_POST['messageFF'];
  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";  
  $headers .= "Content-Type: multipart/mixed;boundary=\"$boundary\"\r\n";
  $headers .= "From: callback@ur-ekspert.ru \r\n";

  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
  for($i=0;$i<count($_FILES['fileFF']['name']);$i++) {
     if(is_uploaded_file($_FILES['fileFF']['tmp_name'][$i])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['fileFF']['tmp_name'][$i])));
         $filename = $_FILES['fileFF']['name'][$i];
         $filetype = $_FILES['fileFF']['type'][$i];
         $filesize += $_FILES['fileFF']['size'][$i];
         $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
     }
   }
   $message.="
--$boundary--";

if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
  if(mail($to, $subject, $message, iconv ('utf-8', 'windows-1251', $headers) )){
    echo $_POST['nameFF'].', Ваше сообщение получено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. У нас возникла ошибка на сайте, пожалуйста напишите нам на почту указанную внизу сайта';
  }
}else {
  echo 'Извините, письмо не отправлено. Размер всех файлов превышает 10 МБ.';
}
}