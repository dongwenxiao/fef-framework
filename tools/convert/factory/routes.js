/* 
    生成路由部分代码

    /src/router/auto-routes.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {

        let importCode = pages.map(pageName => {
            return `const ${pageName} = lazyLoad(() => import(/* webpackChunkName: '${pageName}' */ '../containers/${pageName}PageContainer'))`
        })

        let tagsCode = pages.map(pageName => {
            `<Route path='/${pageName.toLowerCase()}' component={${pageName}} />`
        })

        let code = `
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            ${importCode.join('\n')}
            
            export const routes = [
                ${tagsCode.join(',')}
            ]
        `
        
        write(`${config.root}/src/router/auto-routes.js`, format.jsx(code))
    }
}