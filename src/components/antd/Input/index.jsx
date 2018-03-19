import React from 'react'
import Input from 'antd/lib/input'

import 'antd/lib/input/style'

export default class extends React.Component {

    render() {
        return (
            <Input {...this.props}>{this.props.children}</Input>
        )
    }

}
