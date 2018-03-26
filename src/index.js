import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './redux/store/index'
import Root from './router/routes'

const history = createHistory()
const mountNode = document.getElementById('app')

const proxyAction = require('./auto/proxy-action')
const proxyState = require('./auto/proxy-state')(store, proxyAction)
const allDefaultActions = require('./auto/all-default-actions')
const userFetchActions = require('./auto/user-fetch-actions')

/*
   react-redux 提供 Provider 组件，
   被 Provider 组件包裹的整个 APP 中的每个组件，都可以通过 connect 去连接 store
*/
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} basename="">
            <Root />
        </ConnectedRouter>
    </Provider>,
    mountNode
)
