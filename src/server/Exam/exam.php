<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    require "../util/connectDatabase.php";
    $query = "SELECT subject, date, time, place, status FROM exam;";
    $mysqli = mysqli_query(connectDatabase(), $query);
    $i = 0;
    while($queryMysqli = mysqli_fetch_array($mysqli)) {
        $i++;
        $result[$i]['key'] = (string)$i;
        $result[$i]['number'] = $i;
        $result[$i]['subject'] = $queryMysqli['subject'];
        $result[$i]['date'] = $queryMysqli['date'];
        $result[$i]['time'] = $queryMysqli['time'];
        $result[$i]['place'] = $queryMysqli['place'];
        $result[$i]['status'] = $queryMysqli['status'];
    }
    // $result = [
    //     // 'key'：唯一标识；'number'：序号；'subject'：考试科目；'date'：考试日期；'time'：考试时间；'place'：考试地点；'status'：考务状态
    //     [
    //       'key' => '1',
    //       'number' => 1,
    //       'subject' => '计算机网络',
    //       'date' => '2021-12-25',
    //       'time' => '14 =>00-16 =>00',
    //       'place' => '教学楼A-111',
    //       'status' => '暂时保存'
    //     ],
    //     [
    //       'key' => '2',
    //       'number' => 2,
    //       'subject' => '网络安全',
    //       'date' => '2021-12-26',
    //       'time' => '14 =>00-16 =>00',
    //       'place' => '教学楼B-105',
    //       'status' => '可查看'
    //     ],
    //     [
    //       'key' => '3',
    //       'number' => 3,
    //       'subject' => '操作系统',
    //       'date' => '2021-12-27',
    //       'time' => '14 =>00-16 =>00',
    //       'place' => '教学楼C-213',
    //       'status' => '已发布'
    //     ],
    //     [
    //       'key' => '4',
    //       'number' => 4,
    //       'subject' => '计算机网络',
    //       'date' => '2021-12-25',
    //       'time' => '14 =>00-16 =>00',
    //       'place' => '教学楼A-111',
    //       'status' => '暂时保存'
    //     ],
    //     [
    //       'key' => '5',
    //       'number' => 5,
    //       'subject' => '网络安全',
    //       'date' => '2021-12-26',
    //       'time' => '14 =>00-16 =>00',
    //       'place' => '教学楼B-105',
    //       'status' => '可查看'
    //     ],
    //     [
    //       'key' => '6',
    //       'number' => 6,
    //       'subject' => '操作系统',
    //       'date' => '2021-12-27',
    //       'time' => '14 =>00-16 =>00',
    //       'place' => '教学楼C-213',
    //       'status' => '已发布'
    //     ]
    //   ];
    echo json_encode($result);
?>