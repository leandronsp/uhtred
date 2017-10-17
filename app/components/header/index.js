import React from 'react'
import Stock from 'components/stock/index'

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
