<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $query = "UPDATE appointments SET `date`='$date', `time`='$time', `status`='confirmed' WHERE id=$id";

        if (mysqli_query($link, $query)) {
            echo json_encode("SEND EMAIL TO CLIENT");
        } else {
            echo json_encode("SEND An Error Occured TO SAM");
        }
} else {
    echo json_encode("UN_AUTHORIZED ROUTE");
}