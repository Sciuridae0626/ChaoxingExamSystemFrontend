<?php 
    function connectDatabase(){
        $host = "localhost";
        $username = "sciuridae";
        $password = "Yj010626";
        $databaseName = "exam_system";
        $conn = mysqli_connect($host, $username, $password, $databaseName);
        mysqli_query($conn,"set character set 'utf8'");
        mysqli_query($conn,"set names 'utf8'");
        if (mysqli_connect_errno()) {
            exit("serverError：数据库连接错误");
        }
        return $conn;
    }
?>