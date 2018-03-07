const write = require('../write')
const config = {
    app: require('../../data/app'),
    goods: require('../../data/goods')
}
const tags = require('./tags')


function it(components) {
    return components.map((cc, i) => {
        let tpl = []
        let tag = tags.make(cc.component, cc.props)
        tpl.push(tag.begin)
        if (cc.children && cc.children.length > 0) {
            tpl.push(it(cc.children))
        }
        tpl.push(tag.end)

        return tpl.join('')
    }).join('')
}

let componentTree = it([config.goods])



let pageContent = `
    import React from 'react'
    import { connect } from 'react-redux'
    import { browserHistory } from 'react-router'

    import { Card, Row, Col } from '@erp-c/sp/Card'
    import Input from '@erp-c/sp/Input'
    import Label from '@erp-c/sp/Label'
    import Button from '@erp-c/sp/Button'
    import Image from '@erp-c/sp/Image'
    import Link from '@erp-c/sp/Link'
    import Page from '@erp-c/sp/Page'
    import Table from '@erp-c/sp/Table'
    import StringComponent from '@erp-c/sp/String'

    import { change as breadcrumbChange } from '@erp-logic/breadcrumb/actions'

    const proxyState = require('@erp/client/auto/proxy-state')()

    const mapStateToProps = (state) => {
        return {
            goods: state.goods
        }
    }

    @connect(mapStateToProps)
    export default class GoodsPage extends React.Component {

        render() {

            let { className } = this.props
            let dataSource = this.props.goods.goodsList

            return (
                <div className={className + ' list-page'}>
                    ${componentTree}
                </div>
            )
        }

        componentDidMount() {
            this.props.dispatch(breadcrumbChange([
                { name: '商品信息池', path: '' }
            ]))
        }

    }
`


write('/Users/dongwenxiao/Documents/work_my/convert-config-2-code/project/apps/erp/client/ui/layout/pages/auto/goods.jsx', pageContent)