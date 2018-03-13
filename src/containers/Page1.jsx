import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Page1 from '../components/pages/Page1'
// import { getMemberList, changeInputInfo, postNewInfo } from '../redux/logic/home/actions'

class Home extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return <Page1 {...this.props} />
   }
}

export default connect(
   state => ({ homeState: state.home }),
//    dispatch => ({
//       getMemberList: bindActionCreators(getMemberList, dispatch),
//       changeInputInfo: bindActionCreators(changeInputInfo, dispatch),
//       postNewInfo: bindActionCreators(postNewInfo, dispatch)
//    })
)(Home)
