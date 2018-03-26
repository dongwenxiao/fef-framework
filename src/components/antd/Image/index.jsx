import React from 'react'

export default class extends React.Component {

    render() {
        return (
            <img {...this.props}>{this.props.children}</img>
        )
    }

}
