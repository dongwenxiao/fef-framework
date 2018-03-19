import React from 'react'
import Card from 'antd/lib/card'

import 'antd/lib/card/style'

export default class extends React.Component {

    render() {
        return (
            <Card {...this.props}>{this.props.children}</Card>
        )
    }

}
