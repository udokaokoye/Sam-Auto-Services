<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $price = $_POST['price'];
    $details = $_POST['details'];

    $query = "UPDATE estimator SET price='$price', details='$details' WHERE id=$id";

        if (mysqli_query($link, $query)) {
            echo json_encode("SEND EMAIL TO CLIENT");
        } else {
            echo json_encode("SEND An Error Occured TO SAM");
        }
} else {
    echo json_encode("UN_AUTHORIZED ROUTE");
}