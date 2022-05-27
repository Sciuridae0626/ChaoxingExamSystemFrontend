import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Progress, Divider, Avatar, Button, Slider, Popconfirm, message } from 'antd'
import { nanoid } from 'nanoid'
import GoOverCss from './index.module.css'

export default class GoOver extends Component {

    state = {// now：当前所选题目；nowType：当前所选的是半主观题还是主观题；nowGrade：当前所选题目的得分；testInfo：当前所阅考生的试卷所有题目信息
        now: {
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
        nowType: 'half', nowGrade: 0,
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
            {
                id: '100002',
                index: 2,
                haveChecked: true,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100003',
                index: 3,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100004',
                index: 4,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100005',
                index: 5,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100006',
                index: 6,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100007',
                index: 7,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100008',
                index: 8,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100009',
                index: 9,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100010',
                index: 10,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100011',
                index: 11,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100012',
                index: 12,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100013',
                index: 13,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100014',
                index: 14,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            },
            {
                id: '100015',
                index: 15,
                haveChecked: false,
                isSelected: false,
                title: 'OSI七层模型包括哪些？',
                totalGrade: 5,
                keyWord: '应用层；表示层；会话层；传输层；网络层；数据链路层；物理层',
                reference: 'OSI七层模型从上到下依次为：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层',
                answer: '应用层、网络层、连接层、传输层、数据链路层、空间层、物理层',
                grade: 4
            }
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
            {
                id: '200002',
                index: 2,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200003',
                index: 3,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200004',
                index: 4,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200005',
                index: 5,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200006',
                index: 6,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200007',
                index: 7,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200008',
                index: 8,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200009',
                index: 9,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200010',
                index: 10,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200011',
                index: 11,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200012',
                index: 12,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200013',
                index: 13,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200014',
                index: 14,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            },
            {
                id: '200015',
                index: 15,
                haveChecked: false,
                isSelected: false,
                title: '请简述CSMA/CD工作原理。',
                totalGrade: 10,
                reference: '发送前先监听信道是否空闲，若空闲则立即发送；\n如果信道忙，则继续监听，一旦空闲就立即发送；\n在发送过程中，仍需继续监听。若监听到冲突，则立即停止发送数据，然后发送冲突强化信号；\n发送Jam信号的目的是使所有的站点都能检测到冲突；\n等待一段随机时间（称为退避）以后，再重新尝试',
                answer: '发前先听，空闲即发送，边发边听，冲突时退避',
                grade: 0
            }
        ]
    }}

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        this.setState({nowGrade: this.state.now.grade})
    }

    /* 计算阅卷进度 */
    countFinished = (data) => {
        var finish = 0, total = data.half_subjective.length + data.full_subjective.length
        data.half_subjective.map((item) => {
            if(item.haveChecked) finish = finish + 1
            return 0
        })
        data.full_subjective.map((item) => {
            if(item.haveChecked) finish = finish + 1
            return 0
        })
        return finish/total
    }

    /* 点击圆圈题号 */
    onClickCircle = (type, index) => {
        var halfList = this.state.testInfo.half_subjective
        var fullList = this.state.testInfo.full_subjective
        var newTestInfo = this.state.testInfo
        var newNow, newNowType
        if(type === 'half'){
            halfList.map((item, i) => {
                if(i === index) {item.isSelected = true; newNow = item; newNowType = 'half'}
                else item.isSelected = false
                return item
            })
            fullList.map((item, i) => {
                item.isSelected = false
                return item
            })
        }
        else {
            halfList.map((item, i) => {
                item.isSelected = false
                return item
            })
            fullList.map((item, i) => {
                if(i === index) {item.isSelected = true; newNow = item; newNowType = 'full'}
                else item.isSelected = false
                return item
            })
        }
        newTestInfo.half_subjective = halfList
        newTestInfo.full_subjective = fullList
        this.setState({now: newNow, nowType: newNowType, nowGrade: newNow.grade, testInfo: newTestInfo})
    }

    /* 滑动输入条发生变化时的回调 */
    onChangeSlider = (value) => {
        this.setState({nowGrade: value})
    }

    /* 点击确定按钮 */
    onClickConfirm = (type, index) => {
        var halfList = this.state.testInfo.half_subjective
        var fullList = this.state.testInfo.full_subjective
        var newTestInfo = this.state.testInfo
        if(type === 'half'){
            halfList.map((item, i) => {
                if(i+1 === index) {item.grade = this.state.nowGrade; item.haveChecked = true}
                return item
            })
            newTestInfo.half_subjective = halfList
        }
        else {
            fullList.map((item, i) => {
                if(i+1 === index) {item.grade = this.state.nowGrade; item.haveChecked = true}
                return item
            })
            newTestInfo.full_subjective = fullList
        }
        this.setState({testInfo: newTestInfo})
        message.success({
            content: '批阅成功！',
            style: {marginTop: '8.5vh'}
        })
    }

    /* 点击下一题 */
    onClickNext = (type, index) => {
        var halfLength = this.state.testInfo.half_subjective.length
        var fullLength = this.state.testInfo.full_subjective.length
        if(index === halfLength || index === fullLength) 
            message.error({
                content: '已经是该模块的最后一题了',
                style: {marginTop: '8.5vh'}
            })
        else {
            var halfList = this.state.testInfo.half_subjective
            var fullList = this.state.testInfo.full_subjective
            var newTestInfo = this.state.testInfo
            var newNow
            if(type === 'half'){
                halfList.map((item, i) => {
                    if(i === index) {item.isSelected = true; newNow = item}
                    else item.isSelected = false
                    return item
                })
                fullList.map((item, i) => {
                    item.isSelected = false
                    return item
                })
            }
            else {
                halfList.map((item, i) => {
                    item.isSelected = false
                    return item
                })
                fullList.map((item, i) => {
                    if(i === index) {item.isSelected = true; newNow = item}
                    else item.isSelected = false
                    return item
                })
            }
            newTestInfo.half_subjective = halfList
            newTestInfo.full_subjective = fullList
            this.setState({now: newNow, nowGrade: newNow.grade, testInfo: newTestInfo})
        }
    }
    
    /* 提交整卷的回调 */
    submit = () => {
        this.props.history.goBack()
        message.success({
            content: '已成功提交整卷！',
            style: {marginTop: '8.5vh'}
        })
    }

    render() {
        const {testNumber, testTitle} = this.props.location.state
        const {now, nowType, testInfo} = this.state
        return (
            <div className={GoOverCss.mainWrapper}>
                <Breadcrumb style={{alignSelf: 'flex-start'}}>
                    <Breadcrumb.Item>
                        <Link to={{pathname: "/teacher/mark", state: {isJumpe: true}}}>人工阅卷</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={{pathname: "/teacher/mark", state: {isJumpe: true, defaultSelect: testTitle.value}}}>
                            {testTitle.label}</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{testNumber}</Breadcrumb.Item>
                </Breadcrumb>
                <div className={GoOverCss.paperWrapper}>
                    {/* 左侧区域 */}
                    <div className={GoOverCss.leftWrapper}>
                        <div className={GoOverCss.progressWrapper}>
                            <p style={{whiteSpace: 'nowrap', marginRight: 10}}>阅卷进度</p>
                            <Progress strokeColor={{ '0%': '#606BFF', '100%': '#82B8FF' }} percent={(this.countFinished(this.state.testInfo)*100).toFixed(0)}/>
                        </div>
                        {/* 答题卡 */}
                        <div className={GoOverCss.answerCard}>
                            <h1 style={{marginTop: '2%', fontWeight: 'bold'}}>答题卡</h1>
                            <Divider dashed style={{ borderColor: '#AAAAAA', marginTop: '2%', marginBottom: '3%' }}/>
                            <p style={{alignSelf: 'flex-start'}}>一.&emsp;半主观题</p>
                            {/* 循环渲染半主观题答题卡 */}
                            <div className={GoOverCss.circleWrapper}>
                                {testInfo.half_subjective.map((item, index) => {
                                    return (<div key={nanoid()} className={GoOverCss.circleItem}> 
                                        <Avatar className={GoOverCss.avater} onClick={() => this.onClickCircle('half', index)}
                                            style={item.isSelected ? {backgroundColor: '#FFC300'} :
                                                item.haveChecked ? {backgroundColor: '#3EB575'} : {backgroundColor: '#3B90FF'}}>
                                                    {index+1}</Avatar></div>)})}
                                {/* 保证最后一行不满五个也不横跨至两端 */}
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                            </div>
                            <p style={{alignSelf: 'flex-start', marginTop: '2.5%'}}>二.&emsp;主观题</p>
                            {/* 循环渲染主观题答题卡 */}
                            <div className={GoOverCss.circleWrapper}>
                                {testInfo.full_subjective.map((item, index) => {
                                    return (<div key={nanoid()} className={GoOverCss.circleItem}>
                                        <Avatar className={GoOverCss.avater} onClick={() => this.onClickCircle('full', index)}
                                            style={item.isSelected ? {backgroundColor: '#FFC300'} :
                                                item.haveChecked ? {backgroundColor: '#3EB575'} : {}}>
                                                    {index+1}</Avatar></div>)})}
                                {/* 保证最后一行不满五个也不横跨至两端 */}
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                                <div style={{width: '20%', height: 0, visibility: 'hidden'}}></div>
                            </div>
                        </div>
                        <div></div>
                        <div className={GoOverCss.buttonWrapper}>
                            <Button type='primary' style={{backgroundColor: '#3EB575'}}
                                onClick={this.submit}>提交整卷</Button>
                            <Button type='primary' danger>退出阅卷</Button>
                        </div>
                    </div>
                    {/* 右侧区域 */}
                    <div className={GoOverCss.rightWrapper}>
                        <div className={GoOverCss.header}>
                            <h1 style={{fontSize: '1.5em', fontWeight: 'bold'}}>{testInfo.testTitle_full}</h1>
                            <p>考号：{testInfo.testNumber}</p>
                            <Divider dashed style={{ borderColor: '#AAAAAA', marginTop: '2%', marginBottom: '3%' }}/>
                        </div>
                        {/* 试题内容 */}
                        <div className={GoOverCss.questionWrapper}>
                            <div className={GoOverCss.questionLeft}>{now.index}.&emsp;</div>
                            <div className={GoOverCss.questionRight}>
                                <div> 题干：{now.title}({now.totalGrade}分) </div> <br />
                                {/* 半主观题加关键词 */}
                                {nowType === 'half' ? <div> 关键词：{now.keyWord} </div> : ''}
                                <div className={GoOverCss.lineWrapper}>
                                    <p style={{whiteSpace: 'nowrap'}}>标准参考答案：</p>
                                    <p>{now.reference}</p>
                                </div> <br />
                                <div> 学生答案：{now.answer} </div> <br />
                                <div className={GoOverCss.lineWrapper}>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        该题得分：<Slider style={{width: '150px'}} defaultValue={now.grade} max={now.totalGrade} dots onChange={this.onChangeSlider} />
                                    </div>
                                    <Popconfirm title="确定提交该题成绩吗？" onConfirm={() => this.onClickConfirm(nowType, now.index)} okText="是" cancelText="否">
                                        <Button size='small' shape='round' type='primary'>确定</Button>
                                    </Popconfirm>
                                </div>
                            </div>
                        </div>
                        <p style={{alignSelf: 'flex-end', cursor: 'pointer'}}
                            onClick={() => this.onClickNext(nowType, now.index)}>下一题 →</p>
                    </div>
                </div>
            </div>
        )
    }
}
