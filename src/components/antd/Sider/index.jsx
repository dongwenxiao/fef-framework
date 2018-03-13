import React from 'react'

import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style'

const { Sider } = Layout
export default class extends React.Component {

    render() {
        return (
            <Sider {...this.props}>{this.props.children}</Sider>
        )
    }

}

// Button.propTypes = {
   
// }