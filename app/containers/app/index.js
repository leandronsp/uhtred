import { connect } from 'react-redux'
import React from 'react'
import { bindActionCreators } from 'redux'
import * as actionCreators from 'actions/stocks'
import DrawerLayout from 'layouts/drawer/index'

const mapStateToProps = state => ({
  stocks: state.stocks,
  currentStock: state.currentStock,
  series: state.series
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerLayout)
