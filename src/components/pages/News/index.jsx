
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

             import Page from '../../antd/Page' 
 import Card from '../../antd/Card' 
 import Row from '../../antd/Row' 
 import Col from '../../antd/Col' 
 import Label from '../../antd/Label' 
 import Button from '../../antd/Button' 

            const proxyState = require('../../../auto/proxy-state')()
            const proxyAction = require('../../../auto/proxy-action')

            export default class News extends Component {

                render() {

                    return (
                        <div>
                            Page: News

                            <Page  ><Card  ><Row  ><Col  ><Label   text={"这是一个新闻页面"} ></Label><Button __events={{
            onClick: ((handler, proxyState) => {
                return ({event, value}) => {
                    handler({ event, value, state: proxyState })
                }
            })(
                /* 判断用户自定义处理 或 全局action处理 */
                ({ event, value, state }) => { 
                    
            (() => {
                return new Promise((reslove) => {
                    (() => alert('test'))({event, value, state})
                })
            })
        ().then(() => {})
                },
                proxyState
            ),
        }}  text={"可编程按钮"} ></Button></Col></Row></Card></Page>
                        </div>
                    )
                }
            }
        