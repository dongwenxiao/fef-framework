/* 
    生产reducer

    /src/redux/logic/[页面名字]/reducer.js
*/


const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: ({ name }) => {

        let pageClassName = `${name}`

        let code = `

            import { ${pageClassName}_CHANGE, ${pageClassName}_RESET } from './action-types'
            import { factory } from './initial-state-factory'

            const typesCommands = {
                [${pageClassName}_CHANGE](state, action) {
                    return Object.assign({}, state, action.data)
                },
                [${pageClassName}_RESET](state, action) {
                    return factory()
                }
            }

            export default function(state = factory(), action) {
                const actionResponse = typesCommands[action.type]
                return actionResponse ? actionResponse(state, action) : state
            }

        `

        write(`${config.root}/src/redux/logic/${pageClassName}/reducer.js`, format.jsx(code))
    }
}