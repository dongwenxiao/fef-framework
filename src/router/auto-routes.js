
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/Goods'))
const GoodsAdd = lazyLoad(() => import(/* webpackChunkName: "GoodsAdd" */ '../containers/GoodsAdd'))
            
            const routes = [
                <Route key='Goods-0' path='/Goods' component={Goods} />,<Route key='GoodsAdd-1' path='/GoodsAdd' component={GoodsAdd} />
            ]

            export { routes }
        