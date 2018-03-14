import React from 'react'
import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style'

const { Header } = Layout

export default class extends React.Component {

    render() {
        return (
            <Header {...this.props}>{this.props.children}</Header>
        )
    }

}
