import React from 'react'
import moment from 'moment'
import './styles.css'

const futureVolatility = (stock, serie) => {
  if (stock.vh63 && serie.expires_at) {
    const diffInDays = moment(serie.expires_at, 'YYYY-MM-DD').diff(moment(), 'days')
    return ((stock.vh63 / 63) * diffInDays).toFixed(2)
  }
}

const Stock = ({stock, currentSerie}) => {
  return (
    <div className='stock'>
      <h1>{stock.symbol}</h1>
      <h4>R$ {stock.price}</h4>
      <span className={stock.variation > 0 ? 'positive' : 'negative'}>
        <i className='material-icons'>{stock.variation > 0 ? 'arrow_upward' : 'arrow_downward'}</i>
        {stock.variation}%
      </span>
      <span className='vh63'>
        <i className='material-icons'>swap_vert</i>
        {stock.vh63}%
      </span>
      <p>
        <span>Probable volatility until exercise: {futureVolatility(stock, currentSerie)}%</span>
      </p>
    </div>
  )
}

export default Stock
