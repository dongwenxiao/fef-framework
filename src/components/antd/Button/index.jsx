import React from 'react'
import AntButton from 'antd/lib/button'
import PropTypes from 'prop-types'

import 'antd/lib/button/style'

export default class Button extends React.Component {

    render() {
        return (
            <AntButton {...this.props} onClick={this.handleOnClick}>{this.props.text}</AntButton>
        )
    }

    handleOnClick = (event) => {
        this.props.__events.onClick && this.props.__events.onClick({ event })
    }
}

Button.propTypes = {
    __events: PropTypes.object,
    __styles: PropTypes.object,
    __father: PropTypes.object,
    __children: PropTypes.array,
    __validation: PropTypes.string,

    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    loading: PropTypes.bool
}