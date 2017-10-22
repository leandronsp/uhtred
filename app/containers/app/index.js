import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import * as stocksActions from 'actions/stocks'
import * as seriesActions from 'actions/series'
import * as capitalActions from 'actions/capital'
import AppLayout from 'layouts/app/index'

const mapStateToProps = state => ({
  stocks:       state.stocks,
  currentStock: state.currentStock,
  series:       state.series,
  currentSerie: state.currentSerie,
  callOptions:  state.callOptions,
  capital:      state.capital
})

const actionCreators = Object.assign(
  {},
  stocksActions,
  seriesActions,
  capitalActions
)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout)
