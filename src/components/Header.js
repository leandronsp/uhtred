import React from 'react'
import Stock from './Stock'

const Header = ({stocks}) => (
  <ul className='header'>
    {stocks.map(stock =>
      <Stock
        key={stock.symbol}
        {...stock}
      />
    )}
  </ul>
)

export default Header
