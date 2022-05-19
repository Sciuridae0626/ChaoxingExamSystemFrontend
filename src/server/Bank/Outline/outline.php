<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'chapter'Index'：第几章；'chapter'：章节；'sectionIndex'：第几节；'section'：节次；'site'：考点；'mastery'：掌握程度
        [
          'key' => '1',
          'number' => 1,
          'chapterIndex' => 1,
          'chapter' => '计算机网络体系结构',
          'sectionIndex' => 1,
          'section' => '计算机网络概述',
          'site' => '计算机网络的概念、组成与功能',
          'mastery' => '了解'
        ],
        [
          'key' => '2',
          'number' => 2,
          'chapterIndex' => 1,
          'chapter' => '计算机网络体系结构',
          'sectionIndex' => 1,
          'section' => '计算机网络概述',
          'site' => '计算机网络的分类',
          'mastery' => '理解'
        ],
        [
          'key' => '3',
          'number' => 3,
          'chapterIndex' => 1,
          'chapter' => '计算机网络体系结构',
          'sectionIndex' => 1,
          'section' => '计算机网络概述',
          'site' => '计算机网络主要性能指标',
          'mastery' => '掌握'
        ],
        [
          'key' => '4',
          'number' => 4,
          'chapterIndex' => 1,
          'chapter' => '计算机网络体系结构',
          'sectionIndex' => 2,
          'section' => '计算机网络体系结构与参考模型',
          'site' => '计算机网络分层结构',
          'mastery' => '运用'
        ],
        [
          'key' => '5',
          'number' => 5,
          'chapterIndex' => 1,
          'chapter' => '计算机网络体系结构',
          'sectionIndex' => 2,
          'section' => '计算机网络体系结构与参考模型',
          'site' => '计算机网络协议、接口、服务等概念',
          'mastery' => '了解'
        ],
        [
          'key' => '6',
          'number' => 6,
          'chapterIndex' => 1,
          'chapter' => '计算机网络体系结构',
          'sectionIndex' => 2,
          'section' => '计算机网络体系结构与参考模型',
          'site' => 'ISO/OSI参考模型和TCP/IP模型',
          'mastery' => '理解'
        ],
        [
          'key' => '7',
          'number' => 7,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 1,
          'section' => '通信基础',
          'site' => '信道、信号、带宽、信源与信宿等基本概念',
          'mastery' => '掌握'
        ],
        [
          'key' => '8',
          'number' => 8,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 1,
          'section' => '通信基础',
          'site' => '奈奎斯特定理与香农定理',
          'mastery' => '运用'
        ],
        [
          'key' => '9',
          'number' => 9,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 1,
          'section' => '通信基础',
          'site' => '编码与调制',
          'mastery' => '了解'
        ],
        [
          'key' => '10',
          'number' => 10,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 1,
          'section' => '通信基础',
          'site' => '电路交换、报文交换与分组交换',
          'mastery' => '理解'
        ],
        [
          'key' => '11',
          'number' => 11,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 1,
          'section' => '通信基础',
          'site' => '数据报与虚电路',
          'mastery' => '掌握'
        ],
        [
          'key' => '12',
          'number' => 12,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 2,
          'section' => '传输介质',
          'site' => '双绞线、同轴电缆、光纤与无线传输介质',
          'mastery' => '运用'
        ],
        [
          'key' => '13',
          'number' => 13,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 2,
          'section' => '传输介质',
          'site' => '物理层接口的特性',
          'mastery' => '了解'
        ],
        [
          'key' => '14',
          'number' => 14,
          'chapterIndex' => 2,
          'chapter' => '物理层',
          'sectionIndex' => 3,
          'section' => '物理层设备',
          'site' => '中继器',
          'mastery' => '理解'
        ]
      ];
    echo json_encode($result);
?>