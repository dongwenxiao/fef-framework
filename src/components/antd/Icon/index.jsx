import React from 'react'
import Icon from 'antd/lib/icon'

import 'antd/lib/icon/style'

export default class extends React.Component {

    render() {
        return (
            <Icon {...this.props}>{this.props.children}</Icon>
        )
    }

}
