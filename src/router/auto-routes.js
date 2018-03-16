import React from 'react'
import { Route } from 'react-router-dom'
import lazyLoad from './lazyLoad'

const Home = lazyLoad(() => import(/* webpackChunkName: "Home" */ '../containers/Home'))
const Test = lazyLoad(() => import(/* webpackChunkName: "Test" */ '../containers/Test'))
const Page1 = lazyLoad(() => import(/* webpackChunkName: "Page1" */ '../containers/Page1'))

export const routes = [
    <Route path="/home" component={Home} />,
    <Route path="/test" component={Test} />,
    <Route path="/page1" component={Page1} />
]