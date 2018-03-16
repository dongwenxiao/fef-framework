/* 
    生成路由部分代码

    /src/redux/auto-reducers.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {

        let stateCode = []
        let importCode = pages.map(pageName => {
            let className = `${pageName}Page`
            stateCode.push(className)
            return `import ${className} from './logic/${className}/reducer'`
        })

        let code = `
            ${importCode.join('\n')}

            const reducers = { ${stateCode.join(',')} }
            
            export default reducers
        `

        write(`${config.root}/src/redux/auto-reducers.js`, format.jsx(code))
    }
}