
import React from 'react'
import { Route } from 'react-router-dom'
import lazyLoad from './lazyLoad'

const Goods = lazyLoad(() => import(/* webpackChunkName: "Goods" */ '../containers/GoodsPageContainer'))

const routes = [
    <Route path='/goods' component={Goods} />
]

export { routes }
