import React from 'react'
import Stock from 'components/stock/index'

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
