<?php
use Illuminate\Encryption\Encrypter;
use Illuminate\Support\Facades\Auth;
if (!function_exists('getCurrentDate')) {
    function  getCurrentDate()
    {
        return date('Y-m-d');
    }
}
if (!function_exists('getCurrentDateTime')) {
    function getCurrentDateTime()
    {
        return date('Y-m-d H:i:s');
    }
}
?>