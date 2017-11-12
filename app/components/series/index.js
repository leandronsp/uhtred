import React from 'react'

const Series = ({series, currentSerie, actions}) => {
  return (
    <ul>
      {series.map(serie =>
        <li key={serie.symbol} className={currentSerie.symbol == serie.symbol ? 'active' : ''}>
          <a href='javascript:void(0)' onClick={() => actions.changeCurrentSerie(serie)}>
            <span>{serie.symbol}</span>
            <small>{serie.expires_at}</small>
          </a>
        </li>
      )}
    </ul>
  )
}

export default Series
