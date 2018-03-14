import React from 'react'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style'

const { SubMenu } = Menu

export default class extends React.Component {

    render() {
        return (
            <SubMenu {...this.props}>{this.props.children}</SubMenu>
        )
    }

}
