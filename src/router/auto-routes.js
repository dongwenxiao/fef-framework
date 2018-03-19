
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/GoodsPageContainer'))
const News = lazyLoad(() => import(/* webpackChunkName: "News" */ '../containers/NewsPageContainer'))
            
            const routes = [
                <Route key='Goods-0' path='/goods' component={Goods} />,<Route key='News-1' path='/news' component={News} />
            ]

            export { routes }
        