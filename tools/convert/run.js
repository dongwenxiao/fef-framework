// config
const appConfig = require('../../ini/app')

// file factory
const pageFactory = require('./factory/page')
const containerFactory = require('./factory/container')
const actionTypesFactory = require('./factory/action-types')
const actionsFactory = require('./factory/actions')
const reducerFactory = require('./factory/reducer')
const initialStateFactoryFactory = require('./factory/initial-state-factory')
const autoActionTypes = require('./factory/auto-action-types')

// console.log(JSON.stringify(appConfig))

appConfig.pages.forEach(page => {
    // page
    pageFactory.make(page.name)
    containerFactory.make(page.name)

    // redux
    actionTypesFactory.make(page.name)
    actionsFactory.make(page.name)
    reducerFactory.make(page.name)
        // initialStateFactoryFactory.make(page.name, page.config.state) // state 需要改配置结构

})

autoActionTypes.make(appConfig.pages.map(page => page.name))