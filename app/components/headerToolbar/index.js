import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import styles from './styles'

const HeaderToolbar = ({currentStock, classes}) => {
  return (
    <AppBar className={classes.headerToolbar}>
      <Toolbar>
        <Typography type="title" color="inherit" noWrap>
          {currentStock ? currentStock.symbol : ''}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(HeaderToolbar);
