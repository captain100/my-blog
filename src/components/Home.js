import React, { Component } from 'react'
import { Layout, Icon, Menu } from 'antd'

import './Home.less'

const { Header, Footer, Sider, Content } = Layout

class Home extends Component {
    constructor() {
        super()
        this.state = {
            leftCollapsed: false,
            rightCollapsed: false
        }
    }

    toggle = (e) => {
        const type = e.target.getAttribute('data-type')
        let {leftCollapsed, rightCollapsed} = this.state
        if (type === 'leftCollapsed') {
            console.log(11111)
            this.setState({
                leftCollapsed: !leftCollapsed
            })
        } else {
            console.log(22222)            
            this.setState({
                rightCollapsed: !rightCollapsed
            })
        }
    }

    render() {
        return (
            <Layout className="wrapper">
                {/*<Header style={{ position: 'fixed', width: '100%' }}>
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
                </Header>*/}
                <Sider
                    trigger={null}
                    breakpoint="sm"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                        this.setState({
                            leftCollapsed: collapsed
                        })
                    }}
                    collapsed={this.state.leftCollapsed}
                    className="sider">Sider</Sider>
                <Layout className="main">

                    <Header className="haeder">
                        <Icon
                            className="trigger"
                            type={this.state.leftCollapsed ? 'menu-unfold' : 'menu-fold'}
                            data-type="leftCollapsed"
                            onClick={this.toggle}
                        />
                        Header
                        <Icon
                            className="trigger"
                            data-type="rightCollapsed"
                            type={this.state.rightCollapsed ? 'menu-fold' : 'menu-unfold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className="content">Content</Content>
                    <Footer className="footer">Footer</Footer>
                </Layout>
                <Sider
                    trigger={null}
                    breakpoint="sm"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                        this.setState({
                            rightCollapsed: collapsed
                        })
                    }}
                    collapsed={this.state.rightCollapsed}
                    className="sider">Sider</Sider>

            </Layout>
        )
    }
}



export default Home