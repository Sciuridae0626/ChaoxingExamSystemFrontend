import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link, Route, Redirect } from 'react-router-dom'
import { Layout, Menu, Input } from 'antd';
import { MyIcon } from '../../assets/iconfont.js';
import { routes } from "../../router.js"
import './index.css'
// import './content.less'

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
class Frame extends Component {

    state = {current: "/teacher/home"}

    /* 组件挂载完毕的钩子 */
    componentDidMount = () => {
        this.UNLISTEN = this.props.history.listen( event => {
            this.setState({current: event.pathname})
            if(this.props.history.location.pathname === '/teacher/mark/goover')
                this.setState({current: "/teacher/mark"})
        })
    }

    /* 组件即将卸载的钩子 */
    componentWillUnmount = () => {
        this.UNLISTEN && this.UNLISTEN()
    }

    render() {
        return (
            <Layout hasSider>
                {/* 左侧导航栏 */}
                <Sider id='frameSider'
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={window.window.innerWidth > window.window.innerHeight ? {
                        overflow: 'auto', height: '100vh', position: 'fixed',
                        left: 0, top: 0, bottom: 0, zIndex: 9999
                    } : {height: '100%'}}
                >
                    {/* 产品Logo */}
                    <div className="logo">
                        <h1 id='logoText'>考试系统教师端</h1>
                        <div id='logoBottom' />
                    </div>
                    {/* 导航标签 */}
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} selectedKeys={[this.state.current]}>
                        {routes.map((route) => {
                            return <Menu.Item key={route.path} icon={route.icon}>
                            <Link to={route.path}><span className="menuTextChiness">{route.Chinese}</span> {route.English}</Link>
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout style={window.window.innerWidth > window.window.innerHeight ? { marginLeft: 200 } : { overflow: 'auto' }}>
                {/* <Layout> */}
                    {/* 右侧顶部搜索栏 */}
                    <Header className="site-layout-sub-header-background"
                        style={window.window.innerWidth > window.window.innerHeight ?
                            { position: "fixed", zIndex: 1999, width: '100%', right: 0, padding: 0 }
                            : { padding: 0, minWidth: `${window.window.innerHeight * 1.7488372}px` }}>
                        <Search size="large" placeholder=""
                            prefix={<MyIcon id='searchIcon' type='icon-yuejuan' />} enterButton="Search" />
                    </Header>
                    {/* 右侧中间正文 */}
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}> */}
                        <div className="site-layout-background" style={window.window.innerWidth > window.window.innerHeight
                            ? { padding: 24, minHeight: 360 } : {
                                padding: 24, minHeight: 720,
                                minWidth: `${window.window.innerHeight * 1.7488372}px`
                            }}>
                            {routes.map((route) => {
                                return <Route key={route.path} path={route.path} component={route.component}/>
                            })}
                            <Redirect to="/teacher/home" />
                        </div>
                    </Content>
                    {/* 右侧底部版权栏 */}
                    <Footer style={window.window.innerWidth > window.window.innerHeight ? { textAlign: 'center' }
                        : { textAlign: 'center', minWidth: `${window.window.innerHeight * 1.7488372}px`, zIndex: 999, display: 'none' }}>
                            Examination system ©2022 Created by Gunara, God of darkness</Footer>
                </Layout>
            </Layout>
        );
    }
}

// 组件外包裹withRouter，使组件实例对象的props中具有history对象
export default withRouter(Frame)