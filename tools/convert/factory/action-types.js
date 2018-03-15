/* 
    生产action-type

    /src/redux/logic/[页面名字]/action-types.js
*/


const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pageName) => {

        let pageClassName = `${pageName}Page`

        let code = `
            export const ${pageClassName}_CHANGE = '${pageClassName}_CHANGE'
            export const ${pageClassName}_RESET = '${pageClassName}_RESET'
        `

        write(`${config.root}/src/redux/logic/${pageClassName}/action-types.js`, format.jsx(code))
    }
}