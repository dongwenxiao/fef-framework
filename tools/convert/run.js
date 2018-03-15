// const write = require('./write')
const appConfig = require('../../ini/app')
const pageFactory = require('./factory/page')
const containerFactory = require('./factory/container')

// console.log(JSON.stringify(appConfig))

appConfig.pages.forEach(page => {
    pageFactory.make(page.name)
    containerFactory.make(page.name)
})


// write('/Users/dongwenxiao/Documents/work_my/convert-config-2-code/project/apps/erp/client/ui/layout/pages/auto/goods.jsx', pageContent)