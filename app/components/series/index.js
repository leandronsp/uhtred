import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import styles from './styles'

const Series = ({series, currentSerie, classes, actions}) => {
  return (
    <AppBar position="static">
      <Tabs value={currentSerie ? currentSerie.index : 0}>
        {series.map(serie =>
          <Tab key={serie.symbol} label={serie.symbol} onClick={() => actions.changeCurrentSerie(serie)}/>
        )}
      </Tabs>
    </AppBar>
  );
}

export default withStyles(styles)(Series);
