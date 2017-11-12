import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as seriesActions from 'actions/series'

import Series from 'components/series/index'
import Stock from 'components/stock/index'
import './styles.css'

const mapStateToProps = state => ({
  currentStock: state.currentStock,
  currentSerie: state.currentSerie,
  series: state.series
})

const actionCreators = Object.assign({}, seriesActions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Card = ({series, currentStock, currentSerie, actions}) => {
  return (
    <div className='card'>
      <Stock stock={currentStock} />
      <Series series={series} currentSerie={currentSerie} actions={actions} />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
