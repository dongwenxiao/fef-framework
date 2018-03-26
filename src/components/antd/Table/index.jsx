import React from 'react'
import Table from 'antd/lib/table'

import Image from '../Image'
import Link from '../Link'
import StringComponent from '../String'

const proxyState = require('../../../auto/proxy-state')()

import 'antd/lib/table/style'

export default class extends React.Component {

    render() {
        const columns = this.handleColumns()
        return (
            <Table columns={columns} {...this.props}>{this.props.children}</Table>
        )
    }

    handleColumns = () => {
        return this.props.columnsObj.map(item => {

            let col = {
                title: item.title,
                dataIndex: item.key,
                key: item.key,
                render: (text, rowData) => {

                    if (text === undefined) { text = '' }

                    let factoryProps

                    return (
                        <span>
                            {
                                item.render.map(({ component, props }, i) => {

                                    const canHandleList = ['String', 'Image', 'Link']
                                    if (!canHandleList.includes(component)) {
                                        return null
                                    }

                                    let Component = mappingComponent(component)
                                    factoryProps = eval(props)
                                    let _props = factoryProps({ value: text, row: rowData, state: proxyState })

                                    return (<Component key={i} {..._props} />)
                                })
                            }
                        </span>
                    )
                }
            }
            return col
        })
    }

}

function mappingComponent(component) {
    switch (component) {
        case 'String':
            return StringComponent
        case 'Image':
            return Image
        case 'Link':
            return Link
        default:
            return null
    }
}