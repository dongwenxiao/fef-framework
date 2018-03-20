/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')
const tags = require('./tags')

module.exports = {
    make: ({ name, component, state }) => {

        let pageClassName = `${name}`
        let componentTag = tags.make([component])

        let code = `
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

            ${componentTag.imports}            

            const proxyState = require('../../../auto/proxy-state')()

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