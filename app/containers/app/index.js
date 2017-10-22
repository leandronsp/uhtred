import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import * as stocksActions from 'actions/stocks'
import * as seriesActions from 'actions/series'
import DrawerLayout from 'layouts/drawer/index'

const mapStateToProps = state => ({
  stocks: state.stocks,
  currentStock: state.currentStock,
  series: state.series,
  currentSerie: state.currentSerie,
  callOptions: state.callOptions
})

const actionCreators = Object.assign({}, stocksActions, seriesActions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerLayout)
