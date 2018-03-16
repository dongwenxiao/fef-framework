/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/


const write = require('../utils/write')
const format = require('../utils/format')
const config = require('../config')

module.exports = {
    make: (pageName, state) => {

        let pageClassName = `${pageName}Page`
        let containerClassName = `${pageName}PageContainer`

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
                    console.log(this.props.${pageName}State)
                    return <${pageClassName} {...this.props} />
                }
            }

            export default connect(
                state => ({ ${pageName}State: state.${pageName}Page })
            )(${containerClassName})

        `

        write(`${config.root}/src/containers/${containerClassName}.jsx`, format.jsx(code))
    }
}