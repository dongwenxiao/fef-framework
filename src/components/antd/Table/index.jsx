import React from 'react'
import Table from 'antd/lib/table'

import 'antd/lib/table/style'

export default class extends React.Component {

    render() {
        return (
            <Table {...this.props}>{this.props.children}</Table>
        )
    }

}
