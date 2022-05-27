<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    require "../../util/connectDatabase.php";
    $query = "SELECT username, account, docu_no, landline, telephone, office_address FROM account;";
    $mysqli = mysqli_query(connectDatabase(), $query);
    $i = 0;
    while($queryMysqli = mysqli_fetch_array($mysqli)) {
      $i++;
      $result[$i]['key'] = (string)$i;
      $result[$i]['number'] = $i;
      $result[$i]['nickname'] = $queryMysqli['username'];
      $result[$i]['name'] = $queryMysqli['account'];
      $result[$i]['teacherNumber'] = $queryMysqli['docu_no'];
      $result[$i]['landline'] = $queryMysqli['landline'];
      $result[$i]['telephone'] = $queryMysqli['telephone'];
      $result[$i]['office'] = $queryMysqli['office_address'];
    }
    // $result = [
    //     // 'key'：唯一标识；'number'：序号；'nickname'：用户名；'name'：真实姓名；'teacherNumber'：工号；'landline'：座机号码；'telephone'：手机号码；'office'：办公室
    //     [
    //       'key' => '1',
    //       'number' => 1,
    //       'nickname' => 'Liu Yi',
    //       'name' => '刘一',
    //       'teacherNumber' => '20191520',
    //       'landline' => '28861520',
    //       'telephone' => '15315201520',
    //       'office' => '办公楼A-520'
    //     ],
    //     [
    //       'key' => '2',
    //       'number' => 2,
    //       'nickname' => 'Chen Er',
    //       'name' => '陈二',
    //       'teacherNumber' => '20191521',
    //       'landline' => '28861521',
    //       'telephone' => '15315201521',
    //       'office' => '办公楼A-521'
    //     ],
    //     [
    //       'key' => '3',
    //       'number' => 3,
    //       'nickname' => 'Zhang San',
    //       'name' => '张三',
    //       'teacherNumber' => '20191522',
    //       'landline' => '28861522',
    //       'telephone' => '15315201522',
    //       'office' => '办公楼A-522'
    //     ],
    //     [
    //       'key' => '4',
    //       'number' => 4,
    //       'nickname' => 'Li Si',
    //       'name' => '李四',
    //       'teacherNumber' => '20191523',
    //       'landline' => '28861523',
    //       'telephone' => '15315201523',
    //       'office' => '办公楼A-523'
    //     ],
    //     [
    //       'key' => '5',
    //       'number' => 5,
    //       'nickname' => 'Wang Wu',
    //       'name' => '王五',
    //       'teacherNumber' => '20191524',
    //       'landline' => '28861524',
    //       'telephone' => '15315201524',
    //       'office' => '办公楼A-524'
    //     ],
    //     [
    //       'key' => '6',
    //       'number' => 6,
    //       'nickname' => 'Zhao Liu',
    //       'name' => '赵六',
    //       'teacherNumber' => '20191525',
    //       'landline' => '28861525',
    //       'telephone' => '15315201525',
    //       'office' => '办公楼A-525'
    //     ],
    //     [
    //       'key' => '7',
    //       'number' => 7,
    //       'nickname' => 'Sun Qi',
    //       'name' => '孙七',
    //       'teacherNumber' => '20191526',
    //       'landline' => '28861526',
    //       'telephone' => '15315201526',
    //       'office' => '办公楼A-526'
    //     ],
    //     [
    //       'key' => '8',
    //       'number' => 8,
    //       'nickname' => 'Zhou Ba',
    //       'name' => '周八',
    //       'teacherNumber' => '20191527',
    //       'landline' => '28861527',
    //       'telephone' => '15315201527',
    //       'office' => '办公楼A-527'
    //     ],
    //     [
    //       'key' => '9',
    //       'number' => 9,
    //       'nickname' => 'Wu Jiu',
    //       'name' => '吴九',
    //       'teacherNumber' => '20191528',
    //       'landline' => '28861528',
    //       'telephone' => '15315201528',
    //       'office' => '办公楼A-528'
    //     ],
    //     [
    //       'key' => '10',
    //       'number' => 10,
    //       'nickname' => 'Zheng Shi',
    //       'name' => '郑十',
    //       'teacherNumber' => '20191529',
    //       'landline' => '28861529',
    //       'telephone' => '15315201529',
    //       'office' => '办公楼A-529'
    //     ],
    //     [
    //       'key' => '11',
    //       'number' => 11,
    //       'nickname' => 'Qiao Liuyi',
    //       'name' => '乔流逸',
    //       'teacherNumber' => '20191530',
    //       'landline' => '28861530',
    //       'telephone' => '15315201530',
    //       'office' => '办公楼A-530'
    //     ],
    //     [
    //       'key' => '12',
    //       'number' => 12,
    //       'nickname' => 'Hu Chuyao',
    //       'name' => '胡初瑶',
    //       'teacherNumber' => '20191531',
    //       'landline' => '28861531',
    //       'telephone' => '15315201531',
    //       'office' => '办公楼A-531'
    //     ],
    //     [
    //       'key' => '13',
    //       'number' => 13,
    //       'nickname' => 'Qiu Yizhi',
    //       'name' => '邱逸致',
    //       'teacherNumber' => '20191532',
    //       'landline' => '28861532',
    //       'telephone' => '15315201532',
    //       'office' => '办公楼A-532'
    //     ],
    //     [
    //       'key' => '14',
    //       'number' => 14,
    //       'nickname' => 'Gong Yueshu',
    //       'name' => '贡悦书',
    //       'teacherNumber' => '20191533',
    //       'landline' => '28861533',
    //       'telephone' => '15315201533',
    //       'office' => '办公楼A-533'
    //     ],
    //     [
    //       'key' => '15',
    //       'number' => 15,
    //       'nickname' => 'Duan Jiamei',
    //       'name' => '段嘉美',
    //       'teacherNumber' => '20191534',
    //       'landline' => '28861534',
    //       'telephone' => '15315201534',
    //       'office' => '办公楼A-534'
    //     ],
    //     [
    //       'key' => '16',
    //       'number' => 16,
    //       'nickname' => 'Wei Yenong',
    //       'name' => '蔚叶农',
    //       'teacherNumber' => '20191535',
    //       'landline' => '28861535',
    //       'telephone' => '15315201535',
    //       'office' => '办公楼A-535'
    //     ]
    //   ];
    echo json_encode($result);
?>