<?php
include './connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $query = "SELECT * FROM `estimator` ORDER BY id DESC";
    $result = mysqli_query($link, $query);
    $data = [];

    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
    }

    echo json_encode($data);
} else {
    echo json_encode("UN_AUTHORIZED ROUTE");
}