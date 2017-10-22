import React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import styles from './styles'

const Stocks = ({stocks, actions, classes}) => {
  return (
    <List>
      {stocks.map(stock =>
        <ListItem key={stock.symbol} onClick={() => actions.changeCurrentStock(stock)} button>
          <ListItemText primary={stock.symbol} />
        </ListItem>
      )}
    </List>
  );
}

export default withStyles(styles)(Stocks);
