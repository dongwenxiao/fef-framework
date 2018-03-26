/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')
const tagsFactory = require('./tags')

module.exports = {
    make: ({ name, component, state }) => {

        let pageClassName = `${name}`
        let componentTag = tagsFactory.make([component])

        let code = `
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

            ${componentTag.imports.join('\n')}

            const proxyState = require('../../../auto/proxy-state')()
            const proxyAction = require('../../../auto/proxy-action')

            export default class ${pageClassName} extends Component {

                render() {

                    return (
                        <div>
                            Page: ${pageClassName}

                            ${componentTag.code}
                        </div>
                    )
                }
            }
        `

        write(`${config.root}/src/components/pages/${pageClassName}/index.jsx`, code)
        // write(`${config.root}/src/components/pages/${pageClassName}/index.jsx`, format.jsx(code))
    }
}