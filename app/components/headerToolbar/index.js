import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Capital from 'components/capital/index'
import styles from './styles'

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

export default withStyles(styles)(HeaderToolbar);
