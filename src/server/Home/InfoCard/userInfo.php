<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    require "../../util/connectDatabase.php";
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data["username"];
    $avatar = "";
    $name = "";
    $nickname = "";
    $jobNumber = "";
    $title = "";
    $email = "";
    $landline = "";
    $mobile = "";
    $office = "";
    $dorm = "";
    $query = "SELECT account, docu_no, job_title, email, landline, telephone, office_address, campus_address FROM account WHERE username = '".$username."';";
    $queryMysqli = mysqli_fetch_array(mysqli_query(connectDatabase(), $query));
    $avatar = "http://api.sciuridae.xyz/image/Home/sampleAvatar.png";
    $name = $queryMysqli[account];
    $nickname = $username;
    $jobNumber = $queryMysqli[docu_no];
    $title = $queryMysqli[job_title];
    $email = $queryMysqli[email];
    $landline = $queryMysqli[landline];
    $mobile = $queryMysqli[telephone];
    $office = $queryMysqli[office_address];
    $dorm = $queryMysqli[campus_address];
    $result = [
        "avatar" => $avatar,
        "name" => $name,
        "nickname" => $nickname,
        "jobNumber" => $jobNumber,
        "title" => $title,
        "e-mail" => $email,
        "landline" => $landline,
        "mobile" => $mobile,
        "office" => $office,
        "dorm" => $dorm
    ];
    echo json_encode($result);
?>