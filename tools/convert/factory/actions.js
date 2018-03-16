/* 
    生产actions

    /src/redux/logic/[页面名字]/actions.js
*/


const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pageName) => {

        let pageClassName = `${pageName}Page`

        let code = `

            import React from 'react'
            import { Route, Switch, Redirect } from 'react-router-dom'
            import { hot } from 'react-hot-loader'
            import lazyLoad from './lazyLoad'
            import App from '../containers/App'
            
            const Home = lazyLoad(() => import(/* webpackChunkName: "Home" */ '../containers/Home'))
            const Test = lazyLoad(() => import(/* webpackChunkName: "Test" */ '../containers/Test'))
            const Page1 = lazyLoad(() => import(/* webpackChunkName: "Page1" */ '../containers/Page1'))
            
            const Root = () => (
                <div>
                <Switch>
                    <Route
                        path="/"
                        render={props => (
                            <App>
                            <Switch>
                                {/* <Route path="/" exact component={lazyLoad(Home)} />
                                <Route path="/home" component={lazyLoad(Home)} />
                                <Route path="/test" component={lazyLoad(Test)} /> */}
                                <Route path="/" exact component={Home} />
                                <Route path="/home" component={Home} />
                                <Route path="/test" component={Test} />
                                <Route path="/page1" component={Page1} />
                                <Route render={() => <Redirect to="/" />} />
                            </Switch>
                            </App>
                        )}
                    />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
                </div>
            )
            
            export default hot(module)(Root)
     

        `

        write(`${config.root}/src/redux/logic/${pageClassName}/actions.js`, format.jsx(code))
    }
}