<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $stars = $_POST['stars'];
    $comments = $_POST['comments'];

    $query = "INSERT INTO `reviews` (`name`, `stars`, `comment`) VALUES (
        '".mysqli_real_escape_string( $link, $name )."', 
        '".mysqli_real_escape_string( $link, $stars )."', 
        '".mysqli_real_escape_string( $link, $comments )."'
        );";

        if (mysqli_query($link, $query)) {
            echo json_encode("SUCCESS");
        } else {
            echo json_encode("An Error Occured");
        }
} else {
    echo json_encode("UN_AUTHORIZED ROUTE");
}