/* 
    生产页面代码

    /src/components/pages/[页面名字]/index.jsx
*/


const write = require('../utils/write')
const format = require('../utils/format')

module.exports = {
    make: (pageName) => {

        let pageClassName = `${pageName}Page`
        let containerClassName = `${pageName}PageContainer`

        let code = `
            import React, { Component } from 'react'
            import { connect } from 'react-redux'
            // import { bindActionCreators } from 'redux'

            import ${pageClassName} from '../components/pages/${pageClassName}'
            // import { getMemberList, changeInputInfo, postNewInfo } from '../redux/logic/home/actions'

            // @connect(state => ({ homeState: state.home }))
            class ${containerClassName} extends Component {
                constructor(props) {
                    super(props)
                }
                render() {
                    return <${pageClassName} {...this.props} />
                }
            }

            export default connect(
                state => ({ homeState: state.home }),
                //    dispatch => ({
                //       getMemberList: bindActionCreators(getMemberList, dispatch),
                //       changeInputInfo: bindActionCreators(changeInputInfo, dispatch),
                //       postNewInfo: bindActionCreators(postNewInfo, dispatch)
                //    })
            )(${containerClassName})

        `

        write(`${process.cwd()}/src/containers/${containerClassName}.jsx`, format.jsx(code))
    }
}