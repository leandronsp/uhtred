import React from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Brand from 'components/brand/index'
import Stocks from 'components/stocks/index'
import styles from './styles'

const Sidebar = ({stocks, actions, classes}) => {
  return (
    <Drawer type="permanent" classes={{paper: classes.drawerPaper}}>
      <Brand />
      <Divider />
      <Stocks stocks={stocks} actions={actions} />
    </Drawer>
  );
}

export default withStyles(styles)(Sidebar);
