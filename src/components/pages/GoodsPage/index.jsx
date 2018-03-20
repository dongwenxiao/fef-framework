
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

            export default class GoodsPage extends Component {

                render() {

                    return (
                        <div>
                            Page: GoodsPage

                            <Page  ><Card  ><Row  ><Col  ><Label   text={"商品名:"} ></Label><Input 
            __events={{
                onChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(({event, value, state}) => { state.GoodsPage.filterGoodsName = value })({event, value, state});
                    },
                    proxyState
                )
            }}
          value={""} ></Input></Col><Col  ><Label   text={"商品ID:"} ></Label><Input 
            __events={{
                onChange: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                )
            }}
          value={""} ></Input></Col><Col  ><Button 
            __events={{
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                )
            }}
          text={"查询"} ></Button><Button 
            __events={{
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        
                    },
                    proxyState
                )
            }}
          text={"重置"} ></Button></Col></Row><Row  ><Col  ><Button 
            __events={{
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;(() => {alert(1)})({event, value, state});
                    },
                    proxyState
                )
            }}
          text={"test"} ></Button></Col></Row></Card><Card  ><Row  ><Button 
            __events={{
                onClick: ((handler, proxyState) => {
                    return ({event, value}) => {
                        handler({ event, value, state: proxyState })
                    }
                })(
                    /* 判断用户自定义处理 或 全局action处理 */
                    ({ event, value, state }) => { 
                        ;browserHistory.push('/goods/add');
                    },
                    proxyState
                )
            }}
          text={"+ 添加"} ></Button></Row></Card><Card  ><Row  ><Table   value={[]}  dataSource={this.props.GoodsPage.goodsList}  columns={[{"title":"ID","key":"goods_id","render":[{"component":"String","props":"({value}) => ({value: '#' + value})"}]},{"title":"商品名称","key":"goods_name","render":[{"component":"String","props":"({value}) => ({value})"}]},{"title":"商品图片","key":"img_url","render":[{"component":"Image","props":"({value}) => ({styles: { width: '80px' }, src: value})"}]},{"title":"品牌名","key":"brand_name","render":[{"component":"String","props":"({value, state}) => ({value: state.dict.goods_brand.find(item => item.id === value).name})"}]},{"title":"操作","key":"goods_opt","render":[{"component":"Link","props":"({ value, row }) => ({ text: '查看', href: '/goods/view/' + row['goods_id'] })"},{"component":"Link","props":"({value, row}) => ({ text: '编辑', href: '/goods/edit/' + row['goods_id'] })"}]}]} ></Table></Row></Card></Page>
                        </div>
                    )
                }
            }
        