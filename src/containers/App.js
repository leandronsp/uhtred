import { connect } from 'react-redux'
import React from 'react'
import Stocks from '../components/Stocks'
import Header from '../components/Header'

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
