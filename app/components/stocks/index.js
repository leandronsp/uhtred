import React from 'react'

const Stocks = ({stocks, currentStock, actions}) => {
  return (
    <ul>
      {stocks.map(stock =>
        <li key={stock.symbol} className={stock.symbol == currentStock.symbol ? 'active' : ''}>
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
