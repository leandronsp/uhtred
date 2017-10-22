import React from 'react'
import { withStyles } from 'material-ui/styles'
import HeaderToolbar from 'components/headerToolbar/index'
import Sidebar from 'components/sidebar/index'
import Main from 'components/main/index'
import styles from './styles'

const AppLayout = (props) => {
  const {classes, stocks, series, callOptions, currentStock, currentSerie, capital, actions} = props

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <HeaderToolbar currentStock={currentStock} capital={capital} actions={actions} />
        <Sidebar stocks={stocks} actions={actions} />
        <Main series={series} currentSerie={currentSerie} callOptions={callOptions} actions={actions} />
      </div>
    </div>
  );
}

export default withStyles(styles)(AppLayout);
