import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as stockActions from 'actions/stocks'
import * as callOptionsActions from 'actions/callOptions'

import Stocks from 'components/stocks/index'
import TrainData from 'components/trainData/index'

import './styles.css'

const mapStateToProps = state => ({
  stocks: state.stocks,
  currentStock: state.currentStock,
  callOptions: state.callOptions,
  isTraining: state.trainData
})
const actionCreators = Object.assign({}, stockActions, callOptionsActions)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Header = ({stocks, currentStock, callOptions, isTraining, actions}) => {
  return (
    <div className='header'>
      <a className='brand' href='/about'>
        <p>Marketr</p>
        <small>about</small>
      </a>
      <Stocks stocks={stocks} currentStock={currentStock} actions={actions} />
      <TrainData callOptions={callOptions} isTraining={isTraining} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
