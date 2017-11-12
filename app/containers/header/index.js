import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/stocks'

import Stocks from 'components/stocks/index'

import './styles.css'

const mapStateToProps = state => ({
  stocks: state.stocks,
  currentStock: state.currentStock
})
const actionCreators = Object.assign({}, actions)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Header = ({stocks, currentStock, actions}) => {
  return (
    <div className='header'>
      <a className='brand' href='/about'>
        <p>Marketr</p>
        <small>about</small>
      </a>
      <Stocks stocks={stocks} currentStock={currentStock} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
