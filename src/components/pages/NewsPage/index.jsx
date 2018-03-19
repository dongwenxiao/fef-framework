
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from '../../antd/Page'
import Card from '../../antd/Card'
import Row from '../../antd/Row'
import Col from '../../antd/Col'
import Label from '../../antd/Label'
import Input from '../../antd/Input'
import Button from '../../antd/Button'

const proxyState = require('../../../auto/proxy-state')

export default class NewsPage extends Component {

  render() {

    return (
      <div>
          Page: NewsPage
          <Page>
              <Card>
                  <Row>
                      <Col>
                          <Label text={ "商品名:" }></Label>
                          <Input __events={ { onChange: ((handler, proxyState) => { return ({event, value}) => { handler({ event, value, state: proxyState }) } })( /* 判断用户自定义处理 或 全局action处理 */ ({event, value, state}) => { }, proxyState ) } } value={ "" } __events={ { "onChange": [{ "action": "ChangeState", "value": "({event, value, state}) => { state.goods.filter_goodsName = value }" }] } }></Input>
                      </Col>
                      <Col>
                          <Label text={ "商品ID:" }></Label>
                          <Input __events={ { onChange: ((handler, proxyState) => { return ({event, value}) => { handler({ event, value, state: proxyState }) } })( /* 判断用户自定义处理 或 全局action处理 */ ({event, value, state}) => { }, proxyState ) } } value={ "" } __events={ { "onChange": [{ "action": "ChangeState", "value": "({event, value, state}) => { state.goods.filter_goodsID = value }" }] } }></Input>
                      </Col>
                      <Col>
                          <Button __events={ { onClick: ((handler, proxyState) => { return ({event, value}) => { handler({ event, value, state: proxyState }) } })( /* 判断用户自定义处理 或 全局action处理 */ ({event, value, state}) => { }, proxyState ) } } text={ "查询" } __events={ { "onClick": [{ "action": "Custom", "value": "GetGoodsList" }] } }></Button>
                          <Button __events={ { onClick: ((handler, proxyState) => { return ({event, value}) => { handler({ event, value, state: proxyState }) } })( /* 判断用户自定义处理 或 全局action处理 */ ({event, value, state}) => { }, proxyState ) } } text={ "重置" } __events={ { "onClick": [{ "action": "ChangeState", "value": " ({state}) => { state.goods = {} } " }] } }></Button>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <Button __events={ { onClick: ((handler, proxyState) => { return ({event, value}) => { handler({ event, value, state: proxyState }) } })( /* 判断用户自定义处理 或 全局action处理 */ ({event, value, state}) => { ;(() => { alert(1) })({ event, value, state }); }, proxyState ) } } text={ "test" } __events={ { "onClick": [{ "action": "Script", "value": "() => {alert(1)}" }] } }></Button>
                      </Col>
                  </Row>
              </Card>
          </Page>
      </div>
    )
  }
}
