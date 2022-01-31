<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $type = $_POST['type'];
    $v_make = $_POST['v_make'];
    $v_model = $_POST['v_model'];
    $v_year = $_POST['v_year'];
    $other_vehicle = $_POST['other_vehicle'];
    $details = $_POST['details'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $query = "INSERT INTO `appointments` (`fname`, `lname`, `email`, `phone`, `address`, `type`, `v_make`, `v_model`, `v_year`, `other_vehicle`, `details`, `date`, `time`) VALUES (
        '".mysqli_real_escape_string( $link, $fname )."', 
        '".mysqli_real_escape_string( $link, $lname )."', 
        '".mysqli_real_escape_string( $link, $email )."', 
        '".mysqli_real_escape_string( $link, $phone )."', 
        '".mysqli_real_escape_string( $link, $address )."', 
        '".mysqli_real_escape_string( $link, $type )."', 
        '".mysqli_real_escape_string( $link, $v_make )."', 
        '".mysqli_real_escape_string( $link, $v_model )."', 
        '".mysqli_real_escape_string( $link, $v_year )."', 
        '".mysqli_real_escape_string( $link, $other_vehicle )."', 
        '".mysqli_real_escape_string( $link, $details )."', 
        '".mysqli_real_escape_string( $link, $date )."', 
        '".mysqli_real_escape_string( $link, $time )."'
        );";

    if (mysqli_query($link, $query)) {
        echo json_encode("SUCCESS");
    } else {
        echo json_encode("An Error Occured");
    }
} else {
    echo json_encode("Un-Authorized Request");
}