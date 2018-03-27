
import React, { Component } from 'react'
import { connect } from 'react-redux'
import News from '../components/pages/News'
// import { bindActionCreators } from 'redux'

class NewsContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log(this.props.News)
    return <News {...this.props} />
  }
}

export default connect(
  state => ({
    News: state.News
  })
)(NewsContainer)

