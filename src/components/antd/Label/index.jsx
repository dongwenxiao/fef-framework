import React from 'react'
export default class extends React.Component {
    render() {
        return (
            <span {...this.props}>{this.props.children}</span>
        )
    }
}
