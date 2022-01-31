<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $v_make = $_POST['v_make'];
    $v_model = $_POST['v_model'];
    $v_year = $_POST['v_year'];
    $v_service = $_POST['v_service'];
    $email = $_POST['email'];

    $query = "INSERT INTO `estimator` (`v_make`, `v_model`, `v_year`, `v_service`, `email`) VALUES (
        '".mysqli_real_escape_string( $link, $v_make )."', 
        '".mysqli_real_escape_string( $link, $v_model )."', 
        '".mysqli_real_escape_string( $link, $v_year )."', 
        '".mysqli_real_escape_string( $link, $v_service )."', 
        '".mysqli_real_escape_string( $link, $email )."'
        );";

        if (mysqli_query($link, $query)) {
            echo json_encode("SUCCESS");
        } else {
            echo json_encode("An Error Occured");
        }
} else {
    echo json_encode("UN_AUTHORIZED ROUTE");
}