// config
const appConfig = require('../../ini/app')

// file factory
const pageFactory = require('./factory/page')
const containerFactory = require('./factory/container')
const actionTypesFactory = require('./factory/action-types')
const actionsFactory = require('./factory/actions')
const reducerFactory = require('./factory/reducer')
const initialStateFactoryFactory = require('./factory/initial-state-factory')
const autoActionTypesFactory = require('./factory/auto-action-types')
const routesFactory = require('./factory/routes')
const autoMenuFactory = require('./factory/auto-menu')
const autoReducersFactory = require('./factory/auto-reducers')

// console.log(JSON.stringify(appConfig))

appConfig.pages.forEach(page => {
    // page
    pageFactory.make(page.name)
    containerFactory.make(page.name, page.state)

    // redux
    actionTypesFactory.make(page.name)
    actionsFactory.make(page.name)
    reducerFactory.make(page.name)
    initialStateFactoryFactory.make(page.name, page.state) // state 需要改配置结构

})

let pages = appConfig.pages.map(page => page.name)
autoActionTypesFactory.make(pages)
routesFactory.make(pages)
autoMenuFactory.make(pages)
autoReducersFactory.make(pages)