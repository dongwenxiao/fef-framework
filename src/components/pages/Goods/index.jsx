
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

             import Page from '../../antd/Page' 
 import Card from '../../antd/Card' 
 import Row from '../../antd/Row' 
 import Col from '../../antd/Col' 
 import Label from '../../antd/Label' 
 import Input from '../../antd/Input' 
 import Button from '../../antd/Button' 
 import Table from '../../antd/Table' 

            const proxyState = require('../../../auto/proxy-state')()
            const proxyAction = require('../../../auto/proxy-action')

            export default class Goods extends Component {

                render() {

                    return (
                        <div>
                            Page: Goods

                            <Page __events={{
            
                onWillMount: ((handler, proxyState) => {
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
            
        
            
                onDidMount: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                ),
            
        
            
                onUnMount: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                ),
            
        }} ><Card  ><Row  ><Col  ><Label   text={"商品名:"} ></Label><Input __events={{
            
                onChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(({event, value, state}) => { state.Goods.filterGoodsName = value })({event, value, state});
                    },
                    proxyState
                ),
            
        }}  value={this.props.Goods.filterGoodsName} ></Input></Col><Col  ><Label   text={"商品ID:"} ></Label><Input __events={{
            
                onChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(({event, value, state}) => { state.Goods.filterGoodsID = value })({event, value, state});
                    },
                    proxyState
                ),
            
        }}  value={this.props.Goods.filterGoodsID} ></Input></Col><Col  ><Button __events={{
            
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
            
        }}  text={"查询"} ></Button><Button __events={{
            
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;( ({state}) => { state.Goods.filterGoodsID = '';state.Goods.filterGoodsName = '' } )({event, value, state});
                    },
                    proxyState
                ),
            
        }}  text={"重置"} ></Button></Col></Row><Row  ><Col  ><Button __events={{
            
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(({state}) => {state.Goods.filterGoodsName = 'kkk'})({event, value, state});
                    },
                    proxyState
                ),
            
        }}  text={"test"} ></Button></Col></Row></Card><Card  ><Row  ><Button __events={{
            
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;proxyAction.redirect({url: '/GoodsAdd'});
                    },
                    proxyState
                ),
            
        }}  text={"+ 添加"} ></Button></Row></Card><Card  ><Row  ><Table __events={{
            
                pageChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                ),
            
        
            
                pageSizeChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                ),
            
        }}  dataSource={this.props.Goods.goodsList}  columnsObj={[{"title":"ID","key":"id","render":[{"component":"String","props":"({value}) => ({value: '#' + value})"}]},{"title":"姓名","key":"name","render":[{"component":"String","props":"({value}) => ({value})"}]},{"title":"图片","key":"img","render":[{"component":"Image","props":"({value}) => ({style: { width: '80px' }, src: value})"}]},{"title":"电话","key":"tel","render":[{"component":"String","props":"({value, state}) => ({value: '+' + value})"}]},{"title":"操作","key":"goods_opt","render":[{"component":"Link","props":"({ value, row }) => ({ text: '查看', href: '/goods/view/' + row['id'] })"},{"component":"Link","props":"({value, row}) => ({ text: '编辑', href: '/goods/edit/' + row['id'] })"}]}]} ></Table></Row></Card></Page>
                        </div>
                    )
                }
            }
        