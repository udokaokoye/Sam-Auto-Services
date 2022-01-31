<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    $query = "INSERT INTO `contact` (`name`, `email`, `subject`, `message`, `phone`) VALUES (
        '".mysqli_real_escape_string( $link, $name )."', 
        '".mysqli_real_escape_string( $link, $email )."', 
        '".mysqli_real_escape_string( $link, $subject )."', 
        '".mysqli_real_escape_string( $link, $message )."', 
        '".mysqli_real_escape_string( $link, $phone )."'
        );";

        if (mysqli_query($link, $query)) {
            echo json_encode("SUCCESS");
        } else {
            echo json_encode("Sorry An Error Occured");
        }
} else {
    echo json_encode("UN_AUTHORIZED ROUTE");
}