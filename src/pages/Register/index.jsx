import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import axios from 'axios'
import RegisterCss from './index.module.css'


export default class Register extends Component {

    state = {loginFlag: false, username: '', password: '',verify:'', name: '', idCradNumber: '', email: '', landline: '', mobile: '', office: '', dorm: ''}

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        this.setState({loginFlag: true})
    }

    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{ return }
    }

    /* 单击注册按钮时的回调 */
    clickConfirm = () => {
        var regNumber = /\d+/ //验证0-9的任意数字最少出现1次。
        var regSmallString = /[a-z]+/ //验证小写26个字母任意字母最少出现1次
        var regBigString = /[A-Z]+/ //验证大写26个字母任意字母最少出现1次
        const password = this.state.password
        var ifLegal = regNumber.test(password) && regSmallString.test(password) && regBigString.test(password)
        if(this.state.password === this.state.verify && ifLegal){
            if(this.state.loginFlag){
                axios.post('https://api.sciuridae.xyz/chaoxing/server/Login/register.php', {
                    username: this.state.username,
                    password: this.state.password,
                    name: this.state.name,
                    idCradNumber: this.state.idCradNumber,
                    email: this.state.email,
                    mobile: this.state.mobile,
                    office: this.state.office,
                    dorm: this.state.dorm
                })
                .then(response => {
                    message.success({
                        content: '注册成功！',
                        style: {marginTop: '8.5vh'}
                    })
                    this.props.history.replace('/login')
                })
                .catch(error => {
                    console.log(error)
                    message.error({
                        content: '注册失败！',
                        style: {marginTop: '8.5vh'}
                    })
                })

            }
        }
        else if(ifLegal) {
            message.error({
                content: '两次密码输入不一致！',
                style: {marginTop: '8.5vh'}
            })
        }
        else {
            message.error({
                content: '密码不超过20位，且需包含数字、大写字母和小写字母！',
                style: {marginTop: '8.5vh'}
            })
        }
    }

    /* 单击返回按钮时的回调 */
    clickBack = () => {
        this.props.history.replace('/login')
    }

    onFinish = (values) => {
    //   console.log('Success:', values)
    }
  
    onFinishFailed = (errorInfo) => {
    //   console.log('Failed:', errorInfo)
    }

    usernameOnChange = (event) => {
        this.setState({username: event.target.value})
    }

    passwordOnChange = (event) => {
        this.setState({password: event.target.value})
    }

    verifyOnChange = (event) => {
        this.setState({verify: event.target.value})
    }

    nameOnChange = (event) => {
        this.setState({name: event.target.value})
    }

    idCradNumberOnChange = (event) => {
        this.setState({idCradNumber: event.target.value})
    }

    emailOnChange = (event) => {
        this.setState({email: event.target.value})
    }

    mobileOnChange = (event) => {
        this.setState({mobile: event.target.value})
    }

    officeOnChange = (event) => {
        this.setState({office: event.target.value})
    }

    dormOnChange = (event) => {
        this.setState({dorm: event.target.value})
    }

    render() {
        return (
            <div className={RegisterCss.mainWrapper}>
                <div name="registerForm" className={RegisterCss.cardWrapper}>
                    <h1 style={{ margin: '9% 0', fontWeight: 'bold', fontFamily: '微软雅黑', zIndex: 999 }}>用户注册</h1>
                    <Form className={RegisterCss.formWrapper} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                        <Form.Item label="用&nbsp;&nbsp;户&nbsp;&nbsp;名" name="registerUsername" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.usernameOnChange} autoComplete="off" /></Form.Item>

                        <Form.Item label="密&emsp;&emsp;码" name="registerPassword" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input type="password" maxLength={20} placeholder='不超过20位，包含数字大小写字母'
                            onChange = {this.passwordOnChange} autoComplete="new-password" /></Form.Item>

                        <Form.Item label="确认密码" name="verify" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input type="password" onChange = {this.verifyOnChange} autoComplete="off" /></Form.Item>
                        
                        <Form.Item label="姓&emsp;&emsp;名" name="name" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.nameOnChange} autoComplete="off" /></Form.Item>
                        
                        <Form.Item label="工&emsp;&emsp;号" name="workNumber" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.idCradNumberOnChange} autoComplete="off" /></Form.Item>
                        
                        <Form.Item label="邮&emsp;&emsp;箱" name="email" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.emailOnChange} autoComplete="off" /></Form.Item>
                        
                        <Form.Item label="手&emsp;&emsp;机" name="mobile" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.mobileOnChange} autoComplete="off" /></Form.Item>

                        <Form.Item label="办&nbsp;&nbsp;公&nbsp;&nbsp;室" name="office" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.officeOnChange} autoComplete="off" /></Form.Item>

                        <Form.Item label="校内住址" name="dorm" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.dormOnChange} autoComplete="off" /></Form.Item>

                        <Form.Item style={{width: '100%'}}>
                            <Button type="primary" htmlType="submit" onClick={this.clickConfirm}
                                style={{width: '100%', 
                                backgroundImage: 'linear-gradient(60deg , #606BFF, #82B8FF)'}}> 
                            提交</Button>
                            <Button type="primary" ghost onClick={this.clickBack}
                                style={{width: '100%', marginTop: '1em'}}>返回</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
