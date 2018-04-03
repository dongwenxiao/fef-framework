/* 
    生产页面代码

    /src/auto/onAppRun.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const _config = require('../config')

module.exports = {
    make: ({ config }) => {

        let code = `
            require('../utils/fetch').setDomain('${config.api}')

            module.exports = ({ history, store }) => {
                const proxyAction = require('./proxy-action').setHistory(history)
                const proxyState = require('./proxy-state')(store, proxyAction)
                const allDefaultActions = require('./all-default-actions')
                const userFetchActions = require('./user-fetch-actions')
            }
        `

        write(`${_config.root}/src/auto/onAppRun.js`, format.jsx(code))
    }
}