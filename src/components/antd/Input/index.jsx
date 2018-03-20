import React from 'react'
// import Input from 'antd/lib/input'

// import 'antd/lib/input/style'

export default class extends React.Component {

    state = { value: '' }

    render() {
        let props = standard.props(this.props)
        let events = standard.events(this.props)
        let me = this
        return <input
            {...props}
            onChange={(e) => {
                let value = e.target.value
                me.setState({ value })
                events.onChange(e)
            }}
            value={this.state.value}
        ></input>
    }

}

export const standard = {
    props: (props = {}) => {
        let defaultProps = {}
        let p = Object.assign(defaultProps, props)
        delete p.__events
        return p
    },
    events: (props = {}) => {
        return {
            onChange: (event) => {
                let value = event.target.value
                props.__events && props.__events.onChange && props.__events.onChange({ event, value })
            }
        }
    }
}