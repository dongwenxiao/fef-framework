import React from 'react'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/lib/breadcrumb/style'

const { Item } = Breadcrumb

export default class extends React.Component {
    render() {
        return (
            <Item {...this.props}>{this.props.children}</Item>
        )
    }
}