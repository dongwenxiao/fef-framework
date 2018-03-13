import React from 'react'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style'

export default class extends React.Component {

    render() {
        return (
            <Menu {...this.props}>{this.props.children}</Menu>
        )
    }

}

const { SubMenu } = Menu

export { SubMenu }