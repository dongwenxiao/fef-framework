import React from 'react'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style'

const { Item } = Menu

export default class extends React.Component {

    render() {
        return (
            <Item {...this.props}>{this.props.children}</Item>
        )
    }

}
