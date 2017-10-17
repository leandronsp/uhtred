import { connect } from 'react-redux'
import React from 'react'
import Stocks from 'components/stocks/index'
import Header from 'components/header/index'

const App = ({stocks}) => (
  <div>
    <Header stocks={stocks} />
    <Stocks stocks={stocks} />
  </div>
)

const mapStateToProps = state => ({
  stocks: state.stocks
})

export default connect(
  mapStateToProps
)(App)
