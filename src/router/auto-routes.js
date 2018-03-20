
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/Goods'))
            
            const routes = [
                <Route key='Goods-0' path='/Goods' component={Goods} />
            ]

            export { routes }
        