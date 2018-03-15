import React from 'react'
import AntButton from 'antd/lib/button'
import PropTypes from 'prop-types'
import 'antd/lib/button/style'

export default class Button extends React.Component {
    render() {
        let wapperProps = standard.wapperProps(this.props)
        let wapperEvents = standard.wapperEvents(this.props)
        return (<AntButton {...wapperProps} {...wapperEvents}>{wapperProps.text}</AntButton>)
    }
}

export const standard = {
    wapperProps: (props = {}) => {
        let defaultProps = {
            text: 'aaaa',
            size: 'small',
            loading: false
        }
        let p = Object.assign(defaultProps, props)
        delete p.__events
        return p
    },
    wapperEvents: (props = {}) => {
        let e = {
            onClick: (event) => {
                props.__events && props.__events.onClick && props.__events.onClick({ event })
            }
        }
        return e
    }
}