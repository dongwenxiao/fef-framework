import React from 'react'
import styles from './index.less'

export default class Label extends React.Component {
    render() {
        return (
            <label className={styles.bg}>{this.props.children}</label>
        )
    }
}