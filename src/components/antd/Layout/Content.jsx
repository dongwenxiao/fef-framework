import React from 'react'
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style'

const { Content } = Layout

export default class extends React.Component {

    render() {
        return (
            <Content {...this.props}>{this.props.children}</Content>
        )
    }

}
