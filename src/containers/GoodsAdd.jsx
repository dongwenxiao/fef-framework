
import React, { Component } from 'react'
import { connect } from 'react-redux'
import GoodsAdd from '../components/pages/GoodsAdd'
// import { bindActionCreators } from 'redux'

class GoodsAddContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.GoodsAdd)
    return <GoodsAdd {...this.props} />
  }
}

export default connect(
  state => ({
    GoodsAdd: state.GoodsAdd
  })
)(GoodsAddContainer)

