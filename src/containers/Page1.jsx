import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Page1 from '../components/pages/Page1'
// import { getMemberList, changeInputInfo, postNewInfo } from '../redux/logic/home/actions'

@connect(state => ({ homeState: state.home }))
class Home extends Component {
   constructor(props) {
      super(props)
   }
   render() {
      return <Page1 {...this.props} />
   }
}
