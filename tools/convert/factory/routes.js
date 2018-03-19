/* 
    生成路由部分代码

    /src/router/auto-routes.js
*/

const write = require('../utils/write')
// const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {

        let importCode = pages.map(({ name }) => {
            return `const ${name} = lazyLoad(() => import(/* webpackChunkName: "${name}" */ '../containers/${name}PageContainer'))`
        })

        let tagsCode = pages.map(({ name }, i) => {
            return `<Route key='${name}-${i}' path='/${name.toLowerCase()}' component={${name}} />`
        })

        let code = `
            import React from 'react'
            import { Route } from 'react-router-dom'
            import lazyLoad from './lazyLoad'

            ${importCode.join('\n')}
            
            const routes = [
                ${tagsCode.join(',')}
            ]

            export { routes }
        `

        write(`${config.root}/src/router/auto-routes.js`, code)
        // 开启格式化会报错，可能是配置问题
        // write(`${config.root}/src/router/auto-routes.js`, format.jsx(code))
    }
}