/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/


const write = require('../utils/write')
const format = require('../utils/format')

module.exports = {
    make: (pageName) => {

        let pageClassName = `${pageName}Page`

        let code = `
            import React, { Component } from 'react'
            import { Link } from 'react-router-dom'

            const proxyState = {}

            export default class ${pageClassName} extends Component {

                render() {

                    return (
                        <div>
                            Page: ${pageName}
                        </div>
                    )
                }
            }
        `

        write(`${process.cwd()}/src/components/pages/${pageClassName}/index.jsx`, format.jsx(code))
    }
}