/*
   App 容器组件的子组件，顶部状态栏
*/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types' // 类型检查捕获错误
import LocaleProvider from '../antd/Locale'
import Icon from '../antd/Icon'
//
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/lib/breadcrumb/style'
//
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style'
const { Header, Content, Sider } = Layout
//
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style'
const { SubMenu } = Menu

class AppCom extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            <LocaleProvider>
                <div id="app-container">
                    <Layout>
                        <Header className="header">
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                    </Layout>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </LocaleProvider>
        )
    }
}
// 设置默认值
AppCom.defaultProps = {
    title: 'default title'
}

// 规定类型
AppCom.propTypes = {
    title: PropTypes.string
}

export default withRouter(AppCom)
