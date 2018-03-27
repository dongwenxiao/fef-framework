
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/Goods'))
const News = lazyLoad(() => import(/* webpackChunkName: "News" */ '../containers/News'))
            
            const routes = [
                <Route key='Goods-0' path='/Goods' component={Goods} />,<Route key='News-1' path='/News' component={News} />
            ]

            export { routes }
        