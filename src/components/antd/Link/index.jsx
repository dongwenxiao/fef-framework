import React from 'react'


export default class extends React.Component {

    render() {
        return (
            <a href={this.props.href}>{this.props.text}</a>
        )
    }

}
