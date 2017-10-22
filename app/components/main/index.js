import React from 'react'
import { withStyles } from 'material-ui/styles'
import Series from 'components/series/index'
import CallOptions from 'components/callOptions/index'
import styles from './styles'

const Main = ({ series, callOptions, currentSerie, actions, classes }) => {
  return (
    <main className={classes.content}>
      <Series series={series} currentSerie={currentSerie} actions={actions} />
      <CallOptions callOptions={callOptions} />
    </main>
  );
}

export default withStyles(styles)(Main);
