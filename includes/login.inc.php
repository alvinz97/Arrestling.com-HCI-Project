<?php

$status = $_REQUEST['status'];

if ($status == 'login') {
    $email = mysqli_real_escape_string($db, $_REQUEST['email']);
    $password = $_REQUEST['password'];

    $e = 'test@gmail.com';
    $p = 'test123';

    if ($email == $e && $password == $p ) {
        echo 'OK';
    } else {
        echo 'Error';
    }
}