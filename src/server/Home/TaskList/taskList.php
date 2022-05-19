<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // content：任务标题；url：立即前往的跳路由；show：跳转后展示的tab标签页
        ["content" => "为《计算机网络》课程选择题题库扩充100题", "url" => "/bank", "show" => "create"],
        ["content" => "出一份《网络安全》期中考试试卷", "url" => "/exam", "show" => "new"],
        ["content" => "担任12月25日《.php数据库原理》考试监考", "url" => "/exam", "show" => "invigilate"],
        ["content" => "完成《计算机组成原理》主观题阅卷", "url" => "/Mark", "show" => "manual"],
    ];
    echo json_encode($result);
?>