import React from 'react'
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import styles from './styles'

const CallOptions = ({ callOptions, classes }) => {
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Trades</TableCell>
          <TableCell>Serie</TableCell>
          <TableCell>Strike</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>STOP</TableCell>
          <TableCell>Capital</TableCell>
          <TableCell>Net profit</TableCell>
          <TableCell>Rate</TableCell>
          <TableCell>Annual Rate</TableCell>
          <TableCell>Balance</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Score</TableCell>
          <TableCell>Last update</TableCell>
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
              <TableCell>{callOption.quantity}</TableCell>
              <TableCell>{callOption.stop_loss}</TableCell>
              <TableCell>{callOption.capital}</TableCell>
              <TableCell>{callOption.net_profit}</TableCell>
              <TableCell>{callOption.rate}</TableCell>
              <TableCell>{callOption.annual_rate}</TableCell>
              <TableCell>{callOption.balance}</TableCell>
              <TableCell>{callOption.rating}</TableCell>
              <TableCell>{callOption.score}</TableCell>
              <TableCell>{callOption.last_update}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default withStyles(styles)(CallOptions);
