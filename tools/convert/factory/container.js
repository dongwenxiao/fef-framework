/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/

const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: ({ name, state }) => {

        let pageClassName = `${name}`
        // let pageState = `${pageClassName}State`
        let containerClassName = `${name}Container`

        let code = `
            import React, { Component } from 'react'
            import { connect } from 'react-redux'
            import ${pageClassName} from '../components/pages/${pageClassName}'
            // import { bindActionCreators } from 'redux'

            class ${containerClassName} extends Component {
                constructor(props) {
                    super(props)
                }
                render() {
                    // console.log(this.props.${pageClassName})
                    return <${pageClassName} {...this.props} />
                }
            }

            export default connect(
                state => ({ ${pageClassName}: state.${pageClassName} })
            )(${containerClassName})

        `

        write(`${config.root}/src/containers/${pageClassName}.jsx`, format.jsx(code))
    }
}