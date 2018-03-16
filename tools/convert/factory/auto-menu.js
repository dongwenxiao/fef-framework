/* 
    生成路由部分代码

    /src/components/App/AutoMenu.jsx
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {

        let tagsCode = pages.map((pageName, i) => {
            return `<MenuItem key='${pageName}-${i}'><Link to='/${pageName.toLowerCase()}'>${pageName}</Link></MenuItem>`
        })

        let code = `
            import React from 'react'
            import { Link } from 'react-router-dom'
            import MenuItem from '../antd/Menu/MenuItem'
            
            const AutoMenu = () => [
                ${tagsCode.join(',')}
            ]
            export default AutoMenu
        `
        
        write(`${config.root}/src/components/App/AutoMenu.jsx`, format.jsx(code))
    }
}