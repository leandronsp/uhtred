import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/series'

import Series from 'components/series/index'
import CallOptions from 'components/callOptions/index'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

const mapStateToProps = state => ({
  currentSerie: state.currentSerie,
  series: state.series,
  callOptions: state.callOptions
})

const actionCreators = Object.assign({}, actions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Main = ({ series, callOptions, currentSerie, actions, classes }) => {
  return (
    <main className={classes.content}>
      <Series series={series} currentSerie={currentSerie} actions={actions} />
      <CallOptions callOptions={callOptions} />
    </main>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Main))
