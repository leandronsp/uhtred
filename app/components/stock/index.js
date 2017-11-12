import React from 'react'
import './styles.css'

const Stock = ({stock}) => {
  return (
    <div className='stock'>
      <h1>{stock.symbol}</h1>
      <h4>{stock.price}</h4>
      <span className={stock.variation > 0 ? 'positive' : 'negative'}>
        <i className='material-icons'>{stock.variation > 0 ? 'arrow_upward' : 'arrow_downward'}</i>
        {stock.variation}%
      </span>
      <span className='vh63'>
        <i className='material-icons'>swap_vert</i>
        {stock.vh63}%
      </span>
    </div>
  )
}

export default Stock
