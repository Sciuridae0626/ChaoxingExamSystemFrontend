<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
    	// cover：考纲覆盖率；same：近三年试卷重复率；'year'：年份；'rate'：某年份对应的重复率
    	'cover' => 0,
    	'same' => [
            [ 'year' => 2021, 'rate' => 0 ],
            [ 'year' => 2020, 'rate' => 0 ],
            [ 'year' => 2019, 'rate' => 0 ]
        ]
    ];
    echo json_encode($result);
?>