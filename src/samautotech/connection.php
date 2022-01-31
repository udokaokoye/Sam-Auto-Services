<?php
// define( 'URLROOT', 'http://192.168.137.1/mp3waves/' );
header( 'Access-Control-Allow-Origin: *' );
header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
header( 'Access-Control-Allow-Headers: *' );
header('X-Frame-Options: ALLOW');
// header( 'Content-Type: application/json; charset=utf-8' );

$link = mysqli_connect( 'localhost', 'root', '', 'samautotech' );

if ( mysqli_connect_error() ) {
    die( 'There Was An Error Connecting To The Database' );
}
?>