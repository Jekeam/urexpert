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

    if (mail("suinegne@gmail.com", "Заявка с сайта", "Имя:".$fio.". тел: ".$tel ,"From: suinegne@gmail.com \r\n")){        
        echo "Сообщение успешно отправлено"; 
    } else { 
        echo "При отправке сообщения возникли ошибки";
    }
}