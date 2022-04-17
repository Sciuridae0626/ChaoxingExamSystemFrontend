# Exam System Readme Text

### 通过yarn add安装的依赖

1. nanoid——唯一标识符生成器
2. pubsub-js——消息订阅与发布
3. react-router-dom——React路由（@5.2.0）
4. antd——Ant Design企业级UI设计语言和React组件库
5. @ant-design/charts——React图表库Ant Design Charts
6. react-app-rewired——对create-react-app脚手架进行自定义配置的社区解决方案
7. customize-cra——为了能够使用react-app-rewired@2.x而需要的插件
8. babel-plugin-import——按需加载组件代码和样式的Babel插件
9. less——向后兼容的 CSS 扩展语言库
10. less-loader—— 用于处理编译.less文件，将其转为css文件代码（@7.1.0）
11. @craco/craco——对create-react-app脚手架进行自定义配置的社区解决方案（Ant Design官方文档推荐）
12. craco-less——支持覆写webpack loader相关配置的库
13. redux——专门用于做状态管理的JS库
14. redux-thunk——Redux异步中间件
15. react-redux——专门用来简化react应用中使用redux的库
16. redux-devtools-extension——结合Chrome浏览器插件调试Redux的工具依赖包
17. react-highlight-words——React中用于高亮展示某段文本的组件
18. draft-js——一款用来构建React富文本编辑器的框架
19. axios——一个基于 promise 的网络请求库
20. array-move——用于数组项移动的函数库
21. react-sortable-hoc——一个React的排序组件库

### 项目运行

1. 安装最新的稳定版`Node.js`，下载地址`https://nodejs.org/en/`。安装后在终端中运行 `node -v` 可以看到版本号，建议下载 14.x 最新稳定版
2. 通过`https://git-scm.com/`安装，安装后可以在终端执行 `git --version` 命令确认版本为 2.0 以上（VSCode安装插件-`GitLens`和`Git History`后，可以在VSCode中绑定GitHub账号并实现仓库管理和同步上传）
3. 从GitHub链接`https://github.com/peppermint-lin/exam-system.git`下载项目源码
4. 在该项目根目录下打开终端，输入`npm install`安装项目依赖（有可能会比较慢，可以考虑翻个墙或者更换淘宝镜像，亦或者替换为第5步）
5. 在终端通过`npm i -g create-react-app`命令，全局安装React脚手架，用`create-react-app hello-react`创建一个新项目，将项目源码中的`public`、`src`、`craco.config.js`和`README.md`文件和文件夹粘贴替换到新项目中，通过`yarn add xxx`安装依赖，例如`yarn add nanoid`（具体需要的依赖详见上一节“通过yarn add安装的依赖”中所述，或根据`package.json`的`dependencies`安装，该步骤可替换第4步）
6. 在该项目根目录下打开终端，输入`yarn start`运行项目（没有yarn命令的话安装一下，或者用npm应该也可以的）

### 项目结构

```
|—— node_modules //相关依赖
|—— public //静态资源文件夹
|—————— favicon.icon //网站页签图标
|—————— index.html //主页面
|—— src //源码文件夹
|—————— assets //资源文件夹
|—————————— iconfont.js //iconfont的图标资源
|—————— components //公共组件文件夹
|—————————— Frame //布局框架组件
|—————— pages //页面文件夹
|—————————— //旗下包含导航所对应的七个页面文件夹
|—————————————— //单页面文件夹下的components中为该页面中仅供自身使用的组件
|—————— App.js //App组件（包裹所有项目组件的最外层父组件，直接包裹布局框架）
|—————— App.less //App组件的样式
|—————— index.js //入口文件
|—————— router.js //路由配置
|—— //其他的配置文件
```

### 需要后端传回的数据（暂为模拟数据）

1. - [x] Home页面的InfoCard组件中的userInfo数据


   ```js
   /* 当前登录用户的个人信息 */
   userInfo = {
       "avatar": avaterPng, //网络图片地址字符串
       "name": "张三", //姓名
       "nickname": "Zhang San", //昵称
       "jobNumber": "20191522", //工号
       "title": "副教授", //职称
       "e-mail": "20191520@school.edu.cn", //邮箱
       "landline": "0571-28861522", //座机
       "mobile": "15315201522", //手机
       "office": "办公楼A-522", //办公室
       "dorm": "寝室楼B-502" //校内住址
   }
   ```

2. Home页面的InfoCard组件中的classInfo数据

   ```js
   /* 当前登录用户正在授课的均分变化信息 */
   classInfo = [
   	// name：课程名；number：均分增减幅度；icon：均分变化图标（增-up、减-down、不变-unchanged）
       {"name": "计算机网络", "number": 1.25, "icon": "up"},
       {"name": "计算机网络实践", "number": 0, "icon": "unchanged"},
       {"name": "网络安全", "number": 0.37, "icon": "down"},
       {"name": "网络安全实践", "number": 0, "icon": "unchanged"}
   ]
   ```
   
3. Home页面的TaskList组件中的taskList数据

   ```js
   /* 任务清单列表信息 */
   taskList = [
       // content：任务标题；url：立即前往的跳路由；show：跳转后展示的tab标签页
       {"content": "为《计算机网络》课程选择题题库扩充100题", "url": "/bank", "show": "create"},
       {"content": "出一份《网络安全》期中考试试卷", "url": "/exam", "show": "new"},
       {"content": "担任12月25日《数据库原理》考试监考", "url": "/exam", "show": "invigilate"},
       {"content": "完成《计算机组成原理》主观题阅卷", "url": "/Mark", "show": "manual"},
   ]
   ```

4. Home页面的BottomCard组件中的CoverPie的data

   ```js
   /* 考纲覆盖率百分比环图数据 */
   const data = [
       // 第二个对象的value值为覆盖率的小数形式
       { type: '未覆盖', value: 0.15 },
       { type: '覆盖', value: 0.85 }
   ];
   ```

5. Home页面的BottomCard组件中的RepeatPie的data

   ```js
    /* 历年重复率百分比环图数据 */
   const data = [
       // 第二个对象的value值为重复率的小数形式
       { type: '未重复', value: 0.85 },
       { type: '重复', value: 0.15 }
   ];
   ```

6. Home页面的BottomCard组件中的workingData数据

   ```js
   /* 方框内的工作数据 */
   workingData = {
       "courses": 4, //任课门数
       "exams": 3, //出卷次数
       "banks": 3500, //题库录入
       "invigilations": 1 //监考次数
   }
   ```
   
7. Course页面的主组件中的courseItem数据（在state里面）

   ```js
   /* 教师所教授的每个课程的数据 */
   courseItem = [
       // name：课程名称；picURL：课程图片地址；code：课程代码；class：班级；time：时间；year：学年；semester：学期；belong：课程归属，data：表格数据
       {
           "name": "计算机网络",
           "picURL": "https://imgtu.com/i/b9icVO",
           "code": "224105001",
           "class": "计算机（师范）201",
           "time": "星期一4-5节",
           "year": "2021-2022",
           "semester": "第二学期",
           "belong": "专业选修课"，
           "data": [
               {
                   key: '1',
                   number: 1,
                   college: '信息学院',
                   class: '计算机201',
                   name: '秦梦瑶',
                   studentNumber: '2020001',
                   telephone: '19815201520',
                   grade: 89
           	},
       		……
   		]
   	},
       ……
   ]
   ```
   
8. Bank页面的主组件中的subjectChildren数据

   ```js
   /* 所属科目的可选列表 */
   subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]
   ```
   
9. Bank页面的Create组件中的data数据

   ```js
   /* 我创建的题库的信息 */
   const data = [
   	// key：唯一标识；number：序号；name：名称；course：课程；type：题型；quantity：题量；status：共享状态
       {
           key: '1',
           number: 1,
           name: '第一单元练习题',
           course: '计算机网络',
           type: '混合',
           quantity: 35,
           status: '私有'
       },
       ……
   ]
   ```

10. Bank页面的Create组件中的modalData数据

    ```js
    /* 弹窗表格所打开的题库的信息 */
    const modalData = [
        // key：唯一标识；stem：题干；type：题型；outline：考纲；difficulty：难易程度；time：更新时间；index：排序号
        {
            key: '1',
            stem: '以下IP地址中，属于C类地址是',
            type: '单选题',
            outline: 1,
            difficulty: '中等',
            time: '2021年12月21日18:03:02',
            index: 0,
        },
        ……
    ]
    ```

11. Bank页面的Outline组件中的selectOptions数据

   ```js
   /* 查看的课程中可选择的课程名（该教师所任教的课程） */
   selectOptions = ["计算机网络", "网络安全", "信息管理", "操作系统"]
   ```

11. Bank页面的Reference组件中的referenceData数据

    ```js
    /* 爬虫结果的返回数据 */
    referenceData = {
        // name：关键词；url：参考题库来源网站；content：爬虫OCR返回结果
        "name": "计算机网络",
        "url": "https://www.nowcoder.com/discuss/1937",
        "content": "OSI分层 （7层）：…………" //该数据换行用\连接
    }
    ```

12. Bank页面的Outline组件中的data数据

    ```js
    /* 教师所查看的科目的考纲信息 */
    const data = [
    	// key：唯一标识；number：序号；chapter：chapterIndex：第几章；章节；sectionIndex：第几节；section：节次；site：考点；mastery：掌握程度
        {
            key: '1',
            number: 1,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 1,
            section: '计算机网络概述',
            site: '计算机网络的概念、组成与功能',
            mastery: '了解'
        },
        ……
    ]
    ```

13. Exam页面的主组件中的data数据

    ```js
    /* 考务安排的信息 */
    const data = [
        // key：唯一标识；number：序号；subject：考试科目；date：考试日期；time：考试时间；place：考试地点；status：考务状态
        {
            key: '1',
            number: 1,
            subject: '计算机网络',
            date: '2021-12-25',
            time: '14:00-16:00',
            place: '教学楼A-111',
            status: '暂时保存'
        },
        ……
    ]
    ```

14. Exam页面的NewTest组件中的subject数据

    ```js
    /* 课程及章节信息 */
    subject = [
        // value：数据值；label：页面显示的标签；children：级联的下一层数据（其内对象属性同父层级）
        {
            value: "计算机网络",
            label: "计算机网络",
            children: [
                {
                    value: "第一章",
                    label: "第一章"
                },
                ……
            ]
        },
        ……
    ]
    ```

15. Exam页面的NewTest组件中的paperChildren数据

    ```js
    /* 试卷可选列表 */
    paperChildren = ["卷1", "卷2", "卷3"]
    ```

16. Exam页面的NewTest组件中的studentChildren数据

    ```js
    /* 应试学生可选列表 */
    studentChildren = ["计算机181", "计算机191", "计算机201"]
    ```

17. Exam页面的NewTest组件中的teacherChildren数据

    ```js
    /* 监考教师可选列表 */
    teacherChildren = ["张三", "李四", "王五"]
    ```

18. Exam页面的Place组件中的campusBelong数据

    ```js
    /* 所属校区可选列表 */
    campusBelong = ["A市B区", "B市C区", "C市D区"]
    ```

19. Exam页面的Build组件中的realTimeData数据

    ```js
    /* 新建试卷实时统计信息 */
    realTimeData = {
    	// cover：考纲覆盖率；same：近三年试卷重复率；year：年份；rate：某年份对应的重复率
    	cover: 0,
    	same: [
            { year: 2021, rate: 0 },
            { year: 2020, rate: 0 },
            { year: 2019, rate: 0 }
        ]
    }
    ```

20. Exam页面的Build组件中的courseBelong数据

    ```js
    /* 所属科目可选列表 */
    courseBelong = ["计算机网络", "网络安全", "信息管理", '操作系统']
    ```

21. Exam页面的Build组件中的outline数据（JudgeQ组件中的也要）

    ```js
    /* 覆盖考纲的信息 */
    outline = [
        // value：数据值；label：页面显示的标签；children：级联的下一层数据（其内对象属性同父层级）
        {
            value: "计算机网络体系结构",
            label: "计算机网络体系结构",
            children: [
                {
                    value: "计算机网络概述",
                    label: "计算机网络概述",
                    children: [
                        {
                            value: "计算机网络的概念、组成与功能",
                            label: "计算机网络的概念、组成与功能"
                        },
                        ……
                    ]
                },
                ……
            ]
        },
        ……
    ]
    ```

22. Exam页面的Build组件中的data数据

    ```js
    /* 待导入题目的题库信息 */
    const data = [
        // key：唯一标识；name：题库名称；type：题型；quantity：题量；time：更新时间
        {
            key: '1',
            name: '我创建的',
            type: '名词解析、多选、论述、解答、计算题',
            quantity: 175,
            time: '2021年12月21日18:03:02'
        },
    ```
    
23. Exam页面的InvigilateList组件中的data数据

    ```js
    /* 监考任务列表的信息 */
    const data = [
        // key：唯一标识；name：姓名；number：学号；place：考试地点；loginIP：登录IP；loginTime：登录时间；submitTime：提交时间；cutting：切屏次数；rate：答题率；status：共享状态
        {
            key: '1',
            name: '秦梦瑶',
            number: '2020001',
            place: '教学楼A-111',
            loginIP: '192.168.1.1',
            loginTime: '14:00',
            submitTime: '',
            cutting: 1,
            rate: 0.012,
            status: '允许'
        },
        ……
    ]
    ```

24. Exam页面的InvigilateThumbnail组件中的data数据

    ```js
    /* 监考任务缩略图的信息 */
    invigilateInfo = [
        // pic：照片地址；name：真实姓名；number：学号；snap：抓拍；cutting：切屏；authentication：认证；tag：1考试中，2已交卷，3缺考，4人脸识别失败
        {
            pic: 'http://api.sciuridae.xyz/image/Exam/QingMengyao.png',
            name: '秦梦瑶',
            number: '2020001',
            snap: 3,
            cutting: 1,
            authentication: 3,
            tag: 0
        },
        ……
    ]
    ```

25. Mark页面的Objective组件中的paperChildren数据

    ```js
    /* 试卷可选列表 */
    paperChildren = ["计算机网络期末考试", "卷2", "卷3"]
    ```

26. Mark页面的Artificial组件中的paperChildren数据

    ```js
    /* 试卷可选列表 */
    paperChildren = ["计算机网络期末考试", "卷2", "卷3"]
    ```

27. Mark页面的Artificial组件中的paperChildren数据

    ```js
    /* 人工阅卷的信息 */
    const data = [
        // key：唯一标识；number：序号；testNumber：考号；studentNumber：学号；loginIP：登录IP；loginTime：登录时间；submitTime：提交时间；cutting：切屏次数；rate：答题率；grade：成绩；edit：操作（0开始阅卷，1继续阅卷，2误判修正）
        {
            key: '1',
            number: 1,
            testNumber: '2022110101',
            studentNumber: '2020001',
            loginIP: '192.168.1.1',
            loginTime: '14:00',
            submitTime: '15:31',
            cutting: 1,
            rate: 0.962,
            grade: null
        },
        ……
    ]
    ```

28. Mark页面的GoOver组件中的testInfo数据（在state里面）

    ```js
    /* 当前所阅考生的试卷所有题目信息 */
    testInfo: {
        // testNumber：考号；testTitle_simple：试卷简名；testTitle_full：试卷全名；half_subjective：半主观题；full_subjective：主观题
    	// id：唯一标识；index：题号；haveChecked：是否人工确认过；isSelected：是否选中（正在批阅）；title：题干；totalGrade：总分；keyWord：关键词；reference：标准参考答案；answer：学生答案；grade：得分
    	testNumber: this.props.location.state.testNumber,
    	testTitle_simple: this.props.location.state.testTitle,
    	testTitle_full: '2021-2022学年《计算机网络》期末考试',
        half_subjective: [
            {
                id: '100001',
                index: 1,
                haveChecked: true,
                isSelected: true,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            ……
        ],
        full_subjective: [
            {
                id: '200001',
                index: 1,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            ……
        ]
    }
    ```

29. Statistics页面的Invigilate组件中的data数据

    ```js
    /* 监考数据的信息 */
    const data = [
        // key：唯一标识；number：序号；name：姓名；studentNumber：学号；loginIP：登录IP；loginTime：登录时间；submitTime：提交时间；snap：抓拍次数；cutting：切屏次数；authentication：认证次数；face：人脸
        {
            key: '1',
            number: '1',
            name: '秦梦瑶',
            studentNumber: '2020001',
            loginIP: '192.168.1.1',
            loginTime: '14:00',
            submitTime: '15:31',
            snap: 3,
            cutting: 1,
            authentication: 3,
            face: '通过'
        },
        ……
    ]
    ```

30. Statistics页面的Invigilate组件中的testChildren数据

    ```js
    /* 监考的考试可选列表 */
    testChildren = ["计算机网络期末考试", "考试2", "考试3"]
    ```

31. Statistics页面的Teach组件中的subjectChildren数据

    ```js
    /* 查看科目的可选列表 */
    subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]
    ```

32. Statistics页面的Teach组件中的testChildren数据

    ```js
    /* 具体考试的可选列表 */
    testChildren = ["期末考试A卷", "期末考试B卷", "期中考试A卷", "期中考试B卷"]
    ```

33. Statistics页面的GradeDistribution组件中的data数据

    ```js
    /* 柱状图数据 */
    const data = [
    	// grade：分数；student：学生人数
        {
            grade: '0-19分',
            student: 2,
        },
        ……
    ]
    ```

34. Statistics页面的WrongDistribution组件中的data数据

    ```js
    /* 饼状图数据 */
    const data = [
    	// point：考点；rate：错误率
        {
            point: '数据链路层',
            rate: 0.05
        },
        ……
    ]
    ```

35. Statistics页面的Analysis（Teach和Build组件中的都要）组件中的data数据

    ```js
    /* 成绩分析的信息 */
    const data = {
        // highest：最高分；lowest：最低分；average：平均分；passRate：及格率；total：考生总数；excellentRate：优秀率；difficulty：难度系数；discrimination：成绩区分度
        highest: 100,
        lowest: 15,
        average: 73.5,
        passRate: 0.7619,
        total: 105,
        excellentRate: 0.333,
        difficulty: 0.52,
        discrimination: 0.44
    }
    ```

36. Statistics页面的BankRate组件中的data数据

    ```js
    /* 折线图数据 */
    const data = [
    	// index：考纲序号；rate：错误率
        {
            index: '1',
            rate: 0.4
        },
        ……
    ]
    ```

37. Statistics页面的Build组件中的subjectChildren数据

    ```js
    /* 查看科目的可选列表 */
    subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]
    ```

38. Statistics页面的Build组件中的testChildren数据

    ```js
    /* 具体考试的可选列表 */
    testChildren = ["期末考试A卷", "期末考试B卷", "期中考试A卷", "期中考试B卷"]
    ```

39. Statistics页面的Chart组件中的data数据

    ```js
    /* 双轴图数据 */
    const data = [
        // grade：分数；frequency：频数；curve：正态分布
        {
            grade: 15,
            frequency: 3,
            curve: 0.05
        },
        ……
    ]
    ```

40. Statistics页面的Cover组件中的coverData数据

    ```js
    /* 考纲覆盖率信息 */
    const coverData = {
        // value：考纲覆盖率；point：本卷未覆盖考点
        value: 0.85,
        point: ['实体联系模型', '数据库设计', '数据库安全性', '关系数据理论', '安全性知识', '标准性知识', '数据库恢复技术', '数据库发展新技术']
    }
    ```

41. Manage页面的Teacher组件中的data数据

    ```js
    /* 教师用户的信息 */
    const data = [
        // key：唯一标识；number：序号；nickname：用户名；name：真实姓名；teacherNumber：工号；landline：座机；telephone：手机号码；office：办公室
        {
            key: '1',
            number: 1,
            nickname: 'Liu Yi',
            name: '刘一',
            teacherNumber: '20191520',
            landline: '28861520',
            telephone: '15315201520',
            office: '办公楼A-520'
        },
        ……
    ]
    ```

42. Manage页面的Student组件中的data数据

    ```js
    /* 学生用户的信息 */
    const data = [
        // key：唯一标识；number：序号；nickname：用户名；college：学院；class：班级；name：真实姓名；studentNumber：学号；telephone：手机号码
        {
            key: '1',
            number: 1,
            nickname: 'Qing Mengyao',
            college: '信息学院',
            class: '计算机201',
            name: '秦梦瑶',
            studentNumber: '2020001',
            telephone: '19815201520'
        },
        ……
    ]
    ```

43. Manage页面的Character组件中的userData数据

    ```js
    /* 用户的角色信息 */
    const userData = [
        // key：唯一标识；number：序号；name：真实姓名；character：角色
        {
            key: '1',
            number: 1,
            name: '刘一',
            character: ['任课教师']
        },
        ……
    ]
    ```

44. Manage页面的Character组件中的configureData数据

    ```js
    /* 配置的角色信息 */
    const configureData = [
        // key：唯一标识；number：序号；character：角色，detail：详情
        {
            key: '1',
            number: 1,
            character: '任课教师',
            detail: '具有课程、题库、监考、统计模块权限'
        },
        ……
    ]
    ```

45. Manage页面的Handle组件中的data数据（在state里面）

    ```js
    /* 操作审批的信息 */
    data: [ // key：唯一标识；number：序号；send：发送方；content：操作内容；status：状态
        {
            key: '1',
            number: 1,
            send: '刘一',
            content: '创建《Web服务器端程序设计》课程',
            status: '待审批'
        },
        ……
    ]
    ```

46. Manage页面的Notice组件中的noticeData数据

    ```js
    /* 历史公告的信息 */
    const noticeData = [
        // key：唯一标识；number：序号；receive：接收对象；title：公告标题
        {
            key: '1',
            number: 1,
            receive: '全选',
            title: '关于做好近期本科在线教学管理的通知'
        },
        ……
    ]
    ```

47. Manage页面的Notice组件中的noticeData数据

    ```js
    /* 历史任务的信息 */
    const taskData = [
        // key：唯一标识；number：序号；receive：接收对象；title：任务标题
        {
            key: '1',
            number: 1,
            receive: '刘一',
            title: '请参与《数据库原理》课程监考'
        },
        ……
    ]
    ```

48. Manage页面的NewNotice组件中的receiver数据

    ```js
    /* 接收对象可选列表 */
    receiver = ["张三", "李四", "王五"]
    ```

49. Manage页面的NewTask组件中的subjectChildren数据

    ```js
    /* 课程可选列表 */
    subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]
    ```

50. Manage页面的NewTask组件中的receiver数据

    ```js
    /* 接收对象可选列表 */
    receiver = ["张三", "李四", "王五"]
    ```

### 需要前端传出的数据



|            位置             |                             字段                             |
| :-------------------------: | :----------------------------------------------------------: |
|   Home页面的InfoCard组件    |  （修改信息）昵称、职称、邮箱、座机、手机、办公室、校内住址  |
|   Exam页面的NewTest组件中   | 考试科目及章节、考试类型、所选试卷、考试时间、考试地点、应试学生、监考教师 |
|   Exam页面的Campus组件中    |                           校区名称                           |
|    Exam页面的Place组件中    |        地点名称、所属校区、可容纳人数上限、是否为机房        |
|    Exam页面的Build组件中    |       自动组卷中的设置（覆盖题型、覆盖考纲、覆盖难度）       |
|    Exam页面的Build组件中    |                      模板导入上传的文件                      |
|    Exam页面的Build组件中    |            试卷名称、试卷描述、所属科目、试卷型号            |
|    Exam页面的BigQ组件中     |               大题题干、包含小题题数、大题总分               |
|   Exam页面的JudgeQ组件中    | 小题题干、分值、答案、绑定考纲、解析（文字、图片、音视频）、所属大题 |
|   Mark页面的GoOver组件中    | 序号、是否已确认、是否被选择、题干、总分、关键词（半主观题）、标准参考答案、学生答案、得分 |
| Manage页面的NewNotice组件中 |                 公告标题、公告内容、接收对象                 |
|  Manage页面的NewTask组件中  | 任务标题、任务所属课程、任务类型模块、考试时间、任务内容、接收对象 |
