import React from 'react'

const Stocks = ({stocks, actions}) => {
  return (
    <ul>
      {stocks.map(stock =>
        <li key={stock.symbol}>
          <a
            href='javascript:void(0)'
            onClick={() => actions.changeCurrentStock(stock)}>{stock.symbol}
          </a>
        </li>
      )}
    </ul>
  )
}

export default Stocks
