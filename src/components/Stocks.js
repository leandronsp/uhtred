import React from 'react'
import Stock from './Stock'

const Stocks = ({stocks}) => (
  <ul>
    {stocks.map(stock =>
      <Stock
        key={stock.symbol}
        {...stock}
      />
    )}
  </ul>
)

export default Stocks
