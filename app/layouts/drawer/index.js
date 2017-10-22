import React from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Tabs, { Tab } from 'material-ui/Tabs'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import styles from './styles'

const DrawerLayout = ({classes, stocks, currentStock, series, currentSerie, callOptions, actions}) => {
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography type="title" color="inherit" noWrap>
              {currentStock ? currentStock.symbol : ''}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          type="permanent"
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={`${classes.drawerHeaderMixin} ${classes.drawerHeader}`}>
            <Typography type="title" color='primary' className={classes.drawerHeaderTitle} noWrap>
              Marketr
            </Typography>
            <Typography type="subheading" color='primary' noWrap>
              About
            </Typography>
          </div>
          <Divider />
          <List>
            {stocks.map(stock =>
              <ListItem key={stock.symbol} onClick={() => actions.changeCurrentStock(stock)} button>
                <ListItemText primary={stock.symbol} />
              </ListItem>
            )}
          </List>
        </Drawer>
        <main className={classes.content}>
          <AppBar position="static">
            <Tabs value={currentSerie ? currentSerie.index : 0}>
              {series.map(serie =>
                <Tab key={serie.symbol} label={serie.symbol} onClick={() => actions.changeCurrentSerie(serie)}/>
              )}
            </Tabs>
          </AppBar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trades</TableCell>
                <TableCell>Serie</TableCell>
                <TableCell>Strike</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {callOptions.map(callOption => {
                return (
                  <TableRow key={callOption.symbol}>
                    <TableCell>{callOption.trades}</TableCell>
                    <TableCell>{callOption.symbol}</TableCell>
                    <TableCell>{callOption.strike}</TableCell>
                    <TableCell>{callOption.price}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  );
}

export default withStyles(styles)(DrawerLayout);
