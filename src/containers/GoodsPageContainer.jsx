
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import GoodsPage from '../components/pages/GoodsPage'
// import { getMemberList, changeInputInfo, postNewInfo } from '../redux/logic/home/actions'

// @connect(state => ({ homeState: state.home }))
class GoodsPageContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <GoodsPage {...this.props} />
  }
}

export default connect(
  state => ({
    homeState: state.home
  }),
//    dispatch => ({
//       getMemberList: bindActionCreators(getMemberList, dispatch),
//       changeInputInfo: bindActionCreators(changeInputInfo, dispatch),
//       postNewInfo: bindActionCreators(postNewInfo, dispatch)
//    })
)(GoodsPageContainer)

