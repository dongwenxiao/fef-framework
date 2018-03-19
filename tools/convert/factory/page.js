/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: ({ name, component, state }) => {

        let pageClassName = `${name}Page`

        let code = `
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

            const proxyState = require('../../../auto/proxy-state')

            export default class ${pageClassName} extends Component {

                render() {

                    return (
                        <div>
                            Page: ${pageClassName}
                        </div>
                    )
                }
            }
        `

        write(`${config.root}/src/components/pages/${pageClassName}/index.jsx`, format.jsx(code))
    }
}