
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewsPage from '../components/pages/NewsPage'
// import { bindActionCreators } from 'redux'

class NewsPageContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.NewsPage)
    return <NewsPage {...this.props} />
  }
}

export default connect(
  state => ({
    NewsPage: state.NewsPage
  })
)(NewsPageContainer)

