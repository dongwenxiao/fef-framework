
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Goods from '../components/pages/Goods'
// import { bindActionCreators } from 'redux'

class GoodsContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.Goods)
    return <Goods {...this.props} />
  }
}

export default connect(
  state => ({
    Goods: state.Goods
  })
)(GoodsContainer)

