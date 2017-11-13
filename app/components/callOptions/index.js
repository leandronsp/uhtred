import React from 'react'
import Moment from 'react-moment'
import './styles.css'

const CallOptions = ({ callOptions }) => {
  return (
    <table className='callOptions'>
      <thead>
        <tr>
          <td>Trades</td>
          <td>Serie</td>
          <td>Strike</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>STOP</td>
          <td>Capital</td>
          <td>Net profit</td>
          <td>Rate</td>
          <td>Annual Rate</td>
          <td>Balance</td>
          <td>Rating</td>
          <td>Last update</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
        {callOptions.map(callOption => {
          return (
            <tr key={callOption.symbol} className={'rating-' + callOption.rating}>
              <td>{callOption.trades}</td>
              <td>{callOption.symbol}</td>
              <td>{callOption.strike}</td>
              <td className='price'>{callOption.price}</td>
              <td>{callOption.quantity}</td>
              <td className='stop-loss'>{callOption.stop_loss}</td>
              <td>R$ {callOption.quantity * callOption.stock_price}</td>
              <td className='net-profit'>R$ {callOption.net_profit}</td>
              <td className='rate'>{callOption.rate}%</td>
              <td>{callOption.annual_rate}%</td>
              <td className='balance'>
                <i className='material-icons'>arrow_downward</i>
                {callOption.balance}%
              </td>
              <td className='rating'>{callOption.rating}</td>
              <td><Moment fromNow>{callOption.last_update}</Moment></td>
              <td className='score'>{callOption.score}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CallOptions
