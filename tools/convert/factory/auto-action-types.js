/* 
    生产auto-action-types

    /src/redux/auto-action-types.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {

        let importsCode = []
        let codes = pages.map(({ name }) => {
            let pageClassName = `${name}Page`
            let importClassName = `${pageClassName}ActionTypes`
            importsCode.push(importClassName)
            let code = `
                import * as ${importClassName} from './logic/${pageClassName}/action-types'
            `
            return code
        })

        codes.push(`
            export const autoActionTypes = [${importsCode.join(',')}]
        `)

        let code = codes.join('')

        write(`${config.root}/src/redux/auto-action-types.js`, format.jsx(code))
    }
}