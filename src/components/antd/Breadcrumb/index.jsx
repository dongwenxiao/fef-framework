import React from 'react'
import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/lib/breadcrumb/style'

export default class extends React.Component {

    render() {
        return (
            <Breadcrumb {...this.props}>{this.props.children}</Breadcrumb>
        )
    }

}

// Button.propTypes = {
   
// }