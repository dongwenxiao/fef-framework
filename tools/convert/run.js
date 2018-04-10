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
const autoAllDefaultActionsFactory = require('./factory/all-default-actions')
const userFetchActionsFactory = require('./factory/user-fetch-actions')
const onAppRunFactory = require('./factory/on-app-run')


const pages = appConfig.pages
pages.forEach(page => {
    // page
    pageFactory.make(page) // page: { name, component, state }
    containerFactory.make(page)

    // redux
    actionTypesFactory.make(page)
    actionsFactory.make(page)
    reducerFactory.make(page)
    initialStateFactoryFactory.make(page)
})

autoActionTypesFactory.make(pages)
routesFactory.make(pages)
autoMenuFactory.make(pages)
autoReducersFactory.make(pages)
autoAllDefaultActionsFactory.make(pages)

userFetchActionsFactory.make(appConfig)
onAppRunFactory.make(appConfig)