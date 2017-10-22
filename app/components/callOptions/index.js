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
  )
}

export default withStyles(styles)(CallOptions);
