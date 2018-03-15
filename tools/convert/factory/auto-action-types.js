/* 
    生产auto-action-types

    /src/redux/auto-action-types.js
*/


const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pages) => {

        let codes = pages.map(page => {
            let pageClassName = `${page}Page`
            let code = `
                import * as ${pageClassName}ActionTypes from './logic/${pageClassName}/action-types'
                export const autoActionTypes = [${pageClassName}ActionTypes]
            `
        })

        let code = codes.join('')

        write(`${config.root}/src/logic/${pageClassName}/initial-state-factory.js`, format.jsx(code))
    }
}