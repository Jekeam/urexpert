<?php
//проверяем, существуют ли переменные в массиве POST
echo $_POST['name'];
echo $_POST['phone'];
if(isset($_POST['name']) and isset($_POST['phone'])){
    $fio = $_POST['name'];
    echo $fio; 
    $tel = $_POST['phone'];
    $fio = htmlspecialchars($fio);
    $tel = htmlspecialchars($tel);
    $fio = urldecode($fio);
    $tel = urldecode($tel);
    $fio = trim($fio);
    $tel = trim($tel);
    $boundary = md5(date('r', time()));

    $mail = array(  
        'to' => "suinegne@gmail.com,a89823703090@ya.ru",
        'subject' => "Заявка с сайта ".$_SERVER['HTTP_REFERER'], 
        'message' => "<html><body><p>Имя:".$fio.". тел: ".$tel."</p></body></html>",  
        'headers' => "MIME-Version: 1.0\r\n"
                    ."Content-type: text/html; charset=utf-8\r\n"
                    ."From: callback@ur-ekspert.ru \r\n"
    );  

    if (mail($mail['to'], $mail['subject'], $mail['message'], iconv ('utf-8', 'windows-1251', $mail['headers']) )
        ){        
        echo "Сообщение успешно отправлено"; 
    } else { 
        echo "При отправке сообщения возникли ошибки";
    }
}