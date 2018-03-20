/* 
    生产actions
    /src/auto/all-default-actions.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {



        let importsCode = []
        let useCode = []

        pages.forEach(({ name }) => {
            let pageClassName = `${name}`

            importsCode.push(`import * as ${pageClassName} from '../redux/logic/${pageClassName}/actions'`)
            useCode.push(`
                proxyAction.create('${pageClassName}', {
                    action: 'Script',
                    value: ${pageClassName}
                })
            `)
        })

        let code = `
                /* 
                    每个页面默认动作，如：修改状态、重置状态
                */

                ${importsCode.join('\n')}

                const proxyAction = require('./proxy-action')

                ${useCode.join('\n')}
            `

        write(`${config.root}/src/auto/all-default-actions.js`, format.jsx(code))
    }
}