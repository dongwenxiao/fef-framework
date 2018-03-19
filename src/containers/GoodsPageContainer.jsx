
import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoodsPage from '../components/pages/GoodsPage'
// import { bindActionCreators } from 'redux'

class GoodsPageContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.GoodsState)
    return <GoodsPage {...this.props} />
  }
}

export default connect(
  state => ({
    GoodsState: state.GoodsPage
  })
)(GoodsPageContainer)

