/*
   App 容器组件的子组件，顶部状态栏
*/
import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types' // 类型检查捕获错误
//
import LocaleProvider from '../antd/Locale'
import Icon from '../antd/Icon'
import Breadcrumb from '../antd/Breadcrumb'
import BreadcrumbItem from '../antd/Breadcrumb/BreadcrumbItem'
import Layout from '../antd/Layout'
import Header from '../antd/Layout/Header'
import Content from '../antd/Layout/Content'
import Sider from '../antd/Layout/Sider'
import Menu from '../antd/Menu'
import SubMenu from '../antd/Menu/SubMenu'
import MenuItem from '../antd/Menu/MenuItem'

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
                                <MenuItem key="1"><Link to="/">nav 1</Link></MenuItem>
                                <MenuItem key="2"><Link to="/test">nav 2</Link></MenuItem>
                                <MenuItem key="3"><Link to="/page1">nav 3</Link></MenuItem>
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
                                    <MenuItem key="1">option1</MenuItem>
                                    <MenuItem key="2">option2</MenuItem>
                                    <MenuItem key="3">option3</MenuItem>
                                    <MenuItem key="4">option4</MenuItem>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                    <MenuItem key="5">option5</MenuItem>
                                    <MenuItem key="6">option6</MenuItem>
                                    <MenuItem key="7">option7</MenuItem>
                                    <MenuItem key="8">option8</MenuItem>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                    <MenuItem key="9">option9</MenuItem>
                                    <MenuItem key="10">option10</MenuItem>
                                    <MenuItem key="11">option11</MenuItem>
                                    <MenuItem key="12">option12</MenuItem>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <BreadcrumbItem>Home</BreadcrumbItem>
                                <BreadcrumbItem>List</BreadcrumbItem>
                                <BreadcrumbItem>App</BreadcrumbItem>
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
