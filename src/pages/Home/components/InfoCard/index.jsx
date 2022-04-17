import React, { Component } from 'react'
import { Modal, Form, Input, message } from 'antd';
import { nanoid } from 'nanoid'
import axios from 'axios'
import cookie from 'react-cookies'
import { MyIcon } from '../../../../assets/iconfont.js'
import InfoCardCss from'./index.module.css'

export default class InfoCard extends Component {
    
    state = {userInfo: {}, isModalVisible: false, nicknameValue: "", titleValue: "", emailValue: "", landlineValue: "", mobileValue: "", officeValue: "", dormValue: ""}

    /* 当前登录用户正在授课的均分变化信息 */
    classInfo = [
        // name：课程名；number：均分增减幅度；icon：均分变化图标（增-up、减-down、不变-unchanged）
        {"name": "计算机网络", "number": 1.25, "icon": "up"},
        {"name": "计算机网络实践", "number": 0, "icon": "unchanged"},
        {"name": "网络安全", "number": 0.37, "icon": "down"},
        {"name": "网络安全实践", "number": 0, "icon": "unchanged"}
    ]

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        axios.post("https://api.sciuridae.xyz/server/Home/InfoCard/userInfo.php", {
            username: cookie.load("username")
        })
        .then(
            response => {
                this.setState({userInfo: response.data})
                this.setState({nicknameValue: this.state.userInfo.nickname})
                this.setState({titleValue: this.state.userInfo.title})
                this.setState({emailValue: this.state.userInfo['e-mail']})
                this.setState({landlineValue: this.state.userInfo.landline})
                this.setState({mobileValue: this.state.userInfo.mobile})
                this.setState({officeValue: this.state.userInfo.office})
                this.setState({dormValue: this.state.userInfo.dorm})
            }
        )
        .catch(
            error => {
                console.log(error)
                message.error({
                    content: '信息加载失败！',
                    style: {marginTop: '8.5vh'}
                })
            }
        );
    }

    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{ return }
    }

    /* 显示对话框 */
    showModal = () => {
        this.setState({isModalVisible: true})
    }

    /* 点击对话框确定按钮 */
    handleOk = () => {
        axios.post("https://api.sciuridae.xyz/server/Home/InfoCard/updateUserInfo.php", {
            username: cookie.load("username"),
            nicknameValue: this.state.nicknameValue,
            titleValue: this.state.titleValue,
            emailValue: this.state.emailValue,
            landlineValue: this.state.landlineValue,
            mobileValue: this.state.mobileValue,
            officeValue: this.state.officeValue,
            dormValue: this.state.dormValue,
        })
        .then(
            response => {
                this.setState({isModalVisible: false})
                message.success({
                    content: '信息修改成功！',
                    style: {marginTop: '8.5vh'}
                })
                this.componentDidMount()
            }
        )
        .catch(
            error => {
                console.log(error)
                message.error({
                    content: '信息修改失败！',
                    style: {marginTop: '8.5vh'}
                })
            }
        );
    }

    /* 点击对话框取消按钮 */
    handleCancel = () => {
        this.setState({isModalVisible: false})
    }

    nicknameOnChange = (event) => {
        this.setState({nicknameValue: event.target.value})
    }

    titleOnChange = (event) => {
        this.setState({titleValue: event.target.value})
    }

    emailOnChange = (event) => {
        this.setState({emailValue: event.target.value})
    }

    landlineOnChange = (event) => {
        this.setState({landlineValue: event.target.value})
    }

    mobileOnChange = (event) => {
        this.setState({mobileValue: event.target.value})
    }

    officeOnChange = (event) => {
        this.setState({officeValue: event.target.value})
    }

    dormOnChange = (event) => {
        this.setState({dormValue: event.target.value})
    }

    render() {
        const {userInfo, isModalVisible} = this.state
        return (
            <div className={InfoCardCss.cardWrapper}>
                {/* 简要信息部分 */}
                <div className={InfoCardCss.simpleInfo}>
                    <img id={InfoCardCss.avatar} src={userInfo.avatar} alt='用户头像' />
                    <h1 id={InfoCardCss.name}> {userInfo.name} </h1>
                    <p id={InfoCardCss.miniInfo}> 昵称：{userInfo.nickname} <br /> 工号：{userInfo.jobNumber} </p>
                </div>
                {/* 半圆虚线 */}
                <div className={InfoCardCss.cardDashedWrapper}>
                    <div className={InfoCardCss.dashed}></div>
                    <div className={InfoCardCss.topCircleBg}></div>
                    <div className={InfoCardCss.topCircle}></div>
                    <div className={InfoCardCss.bottomCircleBg}></div>
                    <div className={InfoCardCss.bottomCircle}></div>
                </div>
                {/* 详细信息部分 */}
                <div className={InfoCardCss.detailInfo}>
                    <img id={InfoCardCss.modify} src='http://api.sciuridae.xyz/image/Home/modify.png'
                        alt='修改信息' onClick={this.showModal}></img>
                    <div className={InfoCardCss.infoContent}>
                        <p> 职称：{userInfo.title} </p>
                        <p> 邮箱：{userInfo['e-mail']} </p>
                        <p> 座机：{userInfo.landline} </p>
                        <p> 手机：{userInfo.mobile} </p>
                        <p> 办公室：{userInfo.office} </p>
                        <p> 校内住址：{userInfo.dorm} </p>
                    </div>
                </div>
                {/* 半圆虚线 */}
                <div className={InfoCardCss.cardDashedWrapper}>
                    <div className={InfoCardCss.dashed}></div>
                    <div className={InfoCardCss.topCircleBg}></div>
                    <div className={InfoCardCss.topCircle}></div>
                    <div className={InfoCardCss.bottomCircleBg}></div>
                    <div className={InfoCardCss.bottomCircle}></div>
                </div>
                {/* 授课信息部分 */}
                <div className={InfoCardCss.classInfo}>
                    <h4>正在授课</h4>
                    <div className={InfoCardCss.classLine} style={{fontWeight: "600", color: "#555"}}>
                        <p className={InfoCardCss.classInfoContent}>课程名</p>
                        <p className={InfoCardCss.classInfoContent}>最近考试均分变化</p>
                    </div>
                    {this.classInfo.map(item => {
                        return (
                            <div key={nanoid()} className={InfoCardCss.classLine}>
                                <p className={InfoCardCss.classInfoContent}>{item.name}</p>
                                <div> 
                                    {item.number !== 0 ? item.number : "  "} &nbsp; 
                                    <MyIcon type={`icon-${item.icon}`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* 修改信息对话框 */}
                <Modal title="修改信息" maskClosable={false} visible={isModalVisible} onOk={this.handleOk} okText='提交'
                    onCancel={this.handleCancel} cancelText='取消' centered bodyStyle={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
                    }}>
                    <Form name="modifyInfo" style={{width: '80%'}} labelCol={{ span: 8 }}
                        onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}
                        autoComplete="true" size="small" >

                        <Form.Item label="昵称" name="nickname" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.nicknameOnChange} defaultValue={userInfo.nickname} style={{textAlign: 'center'}} />
                        </Form.Item>
                        
                        <Form.Item label="职称" name="title" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.titleOnChange} defaultValue={userInfo.title} style={{textAlign: 'center'}} />
                        </Form.Item>
                        
                        <Form.Item label="邮箱" name="e-mail" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.emailOnChange} defaultValue={userInfo['e-mail']} style={{textAlign: 'center'}} />
                        </Form.Item>
                        
                        <Form.Item label="座机" name="landline" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.landlineOnChange} defaultValue={userInfo.landline} style={{textAlign: 'center'}} />
                        </Form.Item>
                        
                        <Form.Item label="手机" name="mobile" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.mobileOnChange} defaultValue={userInfo.mobile} style={{textAlign: 'center'}} />
                        </Form.Item>
                        
                        <Form.Item label="办公室" name="office" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.officeOnChange} defaultValue={userInfo.office} style={{textAlign: 'center'}} />
                        </Form.Item>
                        
                        <Form.Item label="校内住址" name="dorm" style={{ marginBottom: 10 }}
                            rules={[{ required: true, message: '必填' }]} >
                            <Input onChange = {this.dormOnChange} defaultValue={userInfo.dorm} style={{textAlign: 'center'}} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
