/* 
    生产actions
    /src/redux/logic/[页面名字]/actions.js
*/


const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pageName) => {

        let pageClassName = `${pageName}Page`

        let code = `
            
            import { ${pageClassName}_CHANGE, ${pageClassName}_RESET } from './action-types'
            export const change = (data) => ({
                type: ${pageClassName}_CHANGE,
                data
            })
            export const reset = () => ({
                type: ${pageClassName}_RESET
            })
        `

        write(`${config.root}/src/redux/logic/${pageClassName}/actions.js`, format.jsx(code))
    }
}