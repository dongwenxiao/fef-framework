import React from 'react'

export default class extends React.Component {

    componentWillMount() {
        let events = standard.events(this.props)
        events.onWillMount({})
    }
    
    render() {
        return this.props.children
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
            onWillMount: (event) => {
                props.__events && props.__events.onWillMount && props.__events.onWillMount({ event })
            }
        }
    }
}