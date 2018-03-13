import React from 'react'
import Layout from 'antd/lib/layout'
// import PropTypes from 'prop-types'

import 'antd/lib/layout/style'

export default class extends React.Component {

    render() {
        return (
            <Layout {...this.props}>{this.props.children}</Layout>
        )
    }

}

// Button.propTypes = {
   
// }