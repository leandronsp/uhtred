import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/stocks'

import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Brand from 'components/brand/index'
import Stocks from 'components/stocks/index'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

const mapStateToProps = state => ({ stocks: state.stocks })
const actionCreators = Object.assign({}, actions)
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

const Sidebar = ({stocks, actions, classes}) => {
  return (
    <Drawer type="permanent" classes={{paper: classes.drawerPaper}}>
      <Brand />
      <Divider />
      <Stocks stocks={stocks} actions={actions} />
    </Drawer>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Sidebar))
