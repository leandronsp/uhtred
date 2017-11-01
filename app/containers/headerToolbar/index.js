import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/capital'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Capital from 'components/capital/index'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

const mapStateToProps = state => ({
  currentStock: state.currentStock,
  capital: state.capital
})

const actionCreators = Object.assign({}, actions)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const HeaderToolbar = ({currentStock, capital, actions, classes}) => {
  return (
    <AppBar className={classes.headerToolbar}>
      <Toolbar>
        <Typography type="title" color="inherit" noWrap>
          {currentStock ? currentStock.symbol : ''}
        </Typography>
        <Capital capital={capital} actions={actions} />
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(HeaderToolbar))
