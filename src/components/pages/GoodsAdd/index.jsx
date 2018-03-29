
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

             import Page from '../../antd/Page' 
 import Card from '../../antd/Card' 
 import Row from '../../antd/Row' 
 import Col from '../../antd/Col' 
 import Label from '../../antd/Label' 
 import Input from '../../antd/Input' 
 import Button from '../../antd/Button' 

            const proxyState = require('../../../auto/proxy-state')()
            const proxyAction = require('../../../auto/proxy-action')

            export default class GoodsAdd extends Component {

                render() {

                    return (
                        <div>
                            Page: GoodsAdd

                            <Page  ><Card  ><Row  ><Col  ><Label   text={"商品名:"} ></Label><Input __events={{
            
                onChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(({event, value, state}) => { state.GoodsAdd.goodsName = value })({event, value, state});
                    },
                    proxyState
                ),
            
        }}  value={""} ></Input></Col><Col  ><Label   text={"商品图片:"} ></Label><Input __events={{
            
                onChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(({event, value, state}) => {  })({event, value, state});
                    },
                    proxyState
                ),
            
        }}  value={""} ></Input></Col><Col  ><Button __events={{
            
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;proxyAction['GetGoodsList']();
                    },
                    proxyState
                ),
            
        }}  text={"添加"} ></Button><Button __events={{
            
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;proxyAction.redirect({url: '/Goods'});
                    },
                    proxyState
                ),
            
        }}  text={"返回"} ></Button></Col></Row></Card></Page>
                        </div>
                    )
                }
            }
        