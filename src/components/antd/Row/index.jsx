import React from 'react'
import Row from 'antd/lib/row'

import 'antd/lib/row/style'

export default class extends React.Component {

    render() {
        return (
            <Row {...this.props}>{this.props.children}</Row>
        )
    }

}
