
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/Goods'))
const GoodsAdd = lazyLoad(() => import(/* webpackChunkName: "GoodsAdd" */ '../containers/GoodsAdd'))
const News = lazyLoad(() => import(/* webpackChunkName: "News" */ '../containers/News'))
            
            const routes = [
                <Route key='Goods-0' path='/Goods' component={Goods} />,<Route key='GoodsAdd-1' path='/GoodsAdd' component={GoodsAdd} />,<Route key='News-2' path='/News' component={News} />
            ]

            export { routes }
        