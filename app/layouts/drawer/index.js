import React from 'react'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import styles from './styles'

const DrawerLayout = ({classes, stocks, currentStock, series, currentSerie, actions}) => {
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
        </main>
      </div>
    </div>
  );
}

export default withStyles(styles)(DrawerLayout);
