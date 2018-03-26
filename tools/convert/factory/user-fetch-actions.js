/* 
    生产actions
    /src/auto/user-fetch-actions.js
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: ({ actions }) => {

        const fun = ({ name, type, url, data, callback }) => {

            return `
                proxyAction.create('${name}',
                    {
                        action: 'Fetch',
                        value: {
                            type: '${type}',
                            url: '${url}',
                            data: ${JSON.stringify(data)},
                            callback: \`${callback}\`
                        }
                    }
                )
            `
        }

        let funs = []

        for (let name in actions) {
            let action = actions[name]
            let { type, url, data, callback } = action.value

            funs.push(fun({
                name,
                type,
                url,
                data,
                callback
            }))
        }

        let code = `
            
            const proxyAction = require('./proxy-action')

            ${funs.join(';')}
            
        `

        write(`${config.root}/src/auto/user-fetch-actions.js`, format.jsx(code))
    }
}