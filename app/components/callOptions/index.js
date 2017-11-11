import React from 'react'

const CallOptions = ({ callOptions }) => {
  return (
    <table>
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
            <tr key={callOption.symbol}>
              <td>{callOption.trades}</td>
              <td>{callOption.symbol}</td>
              <td>{callOption.strike}</td>
              <td>{callOption.price}</td>
              <td>{callOption.quantity}</td>
              <td>{callOption.stop_loss}</td>
              <td>{callOption.capital}</td>
              <td>{callOption.net_profit}</td>
              <td>{callOption.rate}</td>
              <td>{callOption.annual_rate}</td>
              <td>{callOption.balance}</td>
              <td>{callOption.rating}</td>
              <td>{callOption.last_update}</td>
              <td>{callOption.score}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CallOptions
