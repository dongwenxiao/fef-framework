import React from 'react'
import Col from 'antd/lib/col'

import 'antd/lib/col/style'

export default class extends React.Component {

    render() {
        return (
            <Col {...this.props}>{this.props.children}</Col>
        )
    }

}
