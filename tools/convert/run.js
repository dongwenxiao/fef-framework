// const write = require('./write')
const appConfig = require('../../ini/app')
const pageFactory = require('./factory/page')
const containerFactory = require('./factory/container')
const actionTypesFactory = require('./factory/action-types')
const actionsFactory = require('./factory/actions')
const reducerFactory = require('./factory/reducer')
const initialStateFactoryFactory = require('./factory/initial-state-factory')

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


// write('/Users/dongwenxiao/Documents/work_my/convert-config-2-code/project/apps/erp/client/ui/layout/pages/auto/goods.jsx', pageContent)