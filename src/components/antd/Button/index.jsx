import React from 'react'
import AntButton from 'antd/lib/button'
import PropTypes from 'prop-types'
import 'antd/lib/button/style'

export default class Button extends React.Component {
    render() {
        let props = standard.props(this.props)
        let events = standard.events(this.props)
        return (<AntButton {...props} {...events}>{props.text}</AntButton>)
    }
}

export const standard = {
    props: (props = {}) => {
        let defaultProps = {
            text: '按钮',
            size: 'small',
            loading: false
        }
        let p = Object.assign(defaultProps, props)
        delete p.__events
        return p
    },
    events: (props = {}) => {
        return {
            onClick: (event) => {
                props.__events && props.__events.onClick && props.__events.onClick({ event })
            }
        }
    }
}