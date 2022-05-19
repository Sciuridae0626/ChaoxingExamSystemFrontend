import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import ResetCss from './index.module.css'

export default class Reset extends Component {

    state = {verifyCode: '', password: '', confirm: ''}

    /* 单击返回按钮时的回调 */
    clickBack = () => {
        this.props.history.replace('/login')
    }

    /* 单击提交按钮时的回调 */
    clickSubmit = () => {
        var regNumber = /\d+/ //验证0-9的任意数字最少出现1次。
        var regSmallString = /[a-z]+/ //验证小写26个字母任意字母最少出现1次
        var regBigString = /[A-Z]+/ //验证大写26个字母任意字母最少出现1次
        const {verifyCode, password, confirm} = this.state
        var ifLegal = regNumber.test(password) && regSmallString.test(password) && regBigString.test(password)
        if(verifyCode === 'gnlhazs' && password === confirm && ifLegal) {
            message.success({
                content: '重置成功！',
                style: {marginTop: '8.5vh'}
            })
            this.props.history.replace('/login')
        }
        else {
            if(verifyCode !== 'gnlhazs') {
                message.error({
                    content: '重置密码验证码错误！请联系管理员',
                    style: {marginTop: '8.5vh'}
                })
            }
            else if(!ifLegal) {
                message.error({
                    content: '密码不超过20位，且需包含数字、大写字母和小写字母！',
                    style: {marginTop: '8.5vh'}
                })
            }
            else {
                message.error({
                    content: '两次密码输入不一致！',
                    style: {marginTop: '8.5vh'}
                })
            }
        }
    }

    /* 新密码发生变化时的回调 */
    passwordOnChange = (event) => {
        this.setState({password: event.target.value})
    }

    /* 确认密码发生变化时的回调 */
    confirmOnChange = (event) => {
        this.setState({confirm: event.target.value})
    }

    /* 重置密码验证码发生变化时的回调 */
    verifyOnChange = (event) => {
        this.setState({verifyCode: event.target.value})
    }

    render() {
        return (
            <div className={ResetCss.mainWrapper}>
                <div className={ResetCss.cardWrapper}>
                    <h1 style={{ margin: '3% 0', fontWeight: 'bold', fontFamily: '微软雅黑', zIndex: 999 }}>重置密码</h1>
                    <Form name="resetForm" className={ResetCss.formWrapper} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                        <Form.Item label="姓&emsp;&emsp;名" name="name" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.titleOnChange} autoComplete="off" /></Form.Item>
                        
                        <Form.Item label="工&emsp;&emsp;号" name="workNumber" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.emailOnChange} autoComplete="off" /></Form.Item>

                        <Form.Item label="新&nbsp;&nbsp;密&nbsp;&nbsp;码" name="resetPassword" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]} onChange = {this.passwordOnChange} 
                        ><Input type="password" onChange = {this.passwordOnchange} autoComplete="new-password" /></Form.Item>

                        <Form.Item label="确认密码" name="resetVerify" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input type="password" onChange = {this.confirmOnChange} autoComplete="new-password" /></Form.Item>

                        <Form.Item label="验&nbsp;&nbsp;证&nbsp;&nbsp;码" name="verify" required style={{alignSelf: 'flex-start', marginBottom: '1.5em', width: '100%'}}
                            rules={[{ required: true, message: '必填' }]}
                        ><Input onChange = {this.verifyOnChange} autoComplete="off" /></Form.Item>

                        <Form.Item style={{width: '100%'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                <Button onClick={this.clickBack} style={{width: '25%'}}>返回</Button>
                                <Button danger ghost htmlType="reset" style={{width: '25%'}}>重置</Button>
                                <Button type="primary" htmlType="submit" onClick={this.clickSubmit} style={{width: '25%', 
                                    backgroundImage: 'linear-gradient(60deg , #606BFF, #82B8FF)'}}>提交</Button>
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <p style={{color: '#8c8c8c'}}>忘记密码可以在本页面重置密码，重置密码需要管理员提供的供重置密码所用的专属验证码</p>
                            <p style={{color: '#8c8c8c'}}>管理员可以在教师用户列表或学生用户列表处点击获取重置密码验证码</p>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

