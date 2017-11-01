import React from 'react'
import { withStyles } from 'material-ui/styles'
import HeaderToolbar from 'containers/headerToolbar/index'
import Sidebar from 'containers/sidebar/index'
import Main from 'containers/main/index'
import styles from './styles'

const App = ({classes}) => {
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <HeaderToolbar />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default withStyles(styles)(App);
