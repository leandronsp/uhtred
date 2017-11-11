import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/capital'

import Capital from 'components/capital/index'

const mapStateToProps = state => ({
  currentStock: state.currentStock,
  capital: state.capital
})

const actionCreators = Object.assign({}, actions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const HeaderToolbar = ({currentStock, capital, actions}) => {
  return (
    <div>
      <p>{currentStock ? currentStock.symbol : ''}</p>
      <Capital capital={capital} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderToolbar)
