/* 
    生产initial-state-factory

    /src/redux/logic/[页面名字]/initial-state-factory.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pageName, state) => {

        let pageClassName = `${pageName}Page`

        let code = `
            export const factory = () => ({
                ${JSON.stringify(state)}
            })
        `

        write(`${config.root}/src/redux/logic/${pageClassName}/initial-state-factory.js`, format.jsx(code))
    }
}