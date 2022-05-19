<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // value：考纲覆盖率；point：本卷未覆盖考点
        value => 0.85,
        point => ['实体联系模型', '数据库设计', '数据库安全性', '关系数据理论', '安全性知识', '标准性知识', '数据库恢复技术', '数据库发展新技术']
    ];
    echo json_encode($result);
?>