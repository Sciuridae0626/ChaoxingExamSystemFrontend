import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd'
import axios from 'axios'
import cookie from 'react-cookies'
import LoginCss from './index.module.css'


export default class Login extends Component {

    state = {loginFlag: false, usernameValue: '', passwordValue: ''}

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        this.setState({loginFlag: true})
    }

    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{ return }
    }

    /* 单击登录按钮时的回调 */
    clickLogin = () => {
        if(this.state.loginFlag){
            axios.post('https://api.sciuridae.xyz/server/Login/login.php', {
                usernameValue: this.state.usernameValue,
                passwordValue: this.state.passwordValue
            })
            .then(response => {
                if(response.data.verify){
                    cookie.save("username", this.state.usernameValue)
                    message.success({
                        content: '登录成功！',
                        style: {marginTop: '8.5vh'}
                    })
                    this.props.history.replace('/teacher')
                }
                else{
                    message.error({
                        content: '用户名或密码错误！',
                        style: {marginTop: '8.5vh'}
                    })
                }
            })
            .catch(error => {
                console.log(error)
                message.error({
                    content: '登录失败！',
                    style: {marginTop: '8.5vh'}
                })
            })
        }
    }
    
    onFinish = (values) => {
      console.log('Received values of form: ', values);
    }

    usernameOnChange = (event) => {
        this.setState({usernameValue: event.target.value})
    }

    passwordOnChange = (event) => {
        this.setState({passwordValue: event.target.value})
    }

    render() {
        return (
            <div className={LoginCss.mainWrapper}>
                <div className={LoginCss.cardWrapper}>
                    <h1 style={{ marginBottom: '15%', fontWeight: 'bold', fontFamily: '微软雅黑' }}>用户登录</h1>
                    <Form name="loginForm" className={LoginCss.formWrapper} autoComplete="true">
                        <Form.Item label="用户名" required name="loginUsername" style={{alignSelf: 'flex-start'}}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        > <Input onChange = {this.usernameOnChange} /> </Form.Item>

                        <Form.Item label="密&emsp;码" required name="loginPassword" style={{alignSelf: 'flex-start'}}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        > <Input type="password" onChange = {this.passwordOnChange} /> </Form.Item>

                        <Form.Item style={{ width: '100%', textAlign: 'center' }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox style={{overflow: 'hidden'}}>记住账号</Checkbox>
                            </Form.Item>
                            <Link to='/reset' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}> 忘记密码 </Link>
                        </Form.Item>

                        <Form.Item style={{marginBottom: 10, width: '100%'}}>
                            <Button type="primary" htmlType="submit" onClick={this.clickLogin}
                                style={{width: '100%', 
                                backgroundImage: 'linear-gradient(60deg , #606BFF, #82B8FF)'}}> 
                            登录</Button>
                        </Form.Item>
                        
                        <Link to='/register' style={{width: '100%', textAlign: 'center'}}>立即注册</Link>
                    </Form>
                </div>
            </div>
        )
    }
}
