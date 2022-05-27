<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    require "../../util/connectDatabase.php";
    $query = "SELECT que_name, que_course, que_type, que_count, share_status, landline_binding FROM que_library WHERE share_status != '私有';";
    $mysqli = mysqli_query(connectDatabase(), $query);
    $i = 0;
    while($queryMysqli = mysqli_fetch_array($mysqli)) {
        $i++;
        $result[$i]['key'] = (string)$i;
        $result[$i]['number'] = $i;
        $result[$i]['name'] = $queryMysqli['que_name'];
        $result[$i]['course'] = $queryMysqli['que_course'];
        $result[$i]['type'] = $queryMysqli['que_type'];
        $result[$i]['quantity'] = $queryMysqli['que_count'];
        $result[$i]['status'] = $queryMysqli['share_status'];
        $result[$i]['binding'] = $queryMysqli['landline_binding'];
    }
    echo json_encode(array_values($result));
?>