import React from 'react'
import { withStyles } from 'material-ui/styles'
import HeaderToolbar from 'components/headerToolbar/index'
import Sidebar from 'components/sidebar/index'
import Main from 'components/main/index'
import styles from './styles'

const DrawerLayout = (props) => {
  const {classes, stocks, series, callOptions, currentStock, currentSerie, actions} = props

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <HeaderToolbar currentStock={currentStock} />
        <Sidebar stocks={stocks} actions={actions} />
        <Main series={series} currentSerie={currentSerie} callOptions={callOptions} actions={actions} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DrawerLayout);
