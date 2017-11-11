import React from 'react'

const Stock = ({stock}) => {
  return (
    <div>
      <h3>{stock.symbol}</h3>
      <p>Price: {stock.price}</p>
      <p>Variation: {stock.variation}</p>
      <p>Volatility: {stock.vh63}</p>
    </div>
  )
}

export default Stock
