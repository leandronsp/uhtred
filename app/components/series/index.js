import React from 'react'
import Moment from 'react-moment'

const Series = ({series, currentSerie, actions}) => {
  return (
    <ul>
      {series.map(serie =>
        <li key={serie.symbol} className={currentSerie.symbol == serie.symbol ? 'active' : ''}>
          <a href='javascript:void(0)' onClick={() => actions.changeCurrentSerie(serie)}>
            <span>{serie.symbol}</span>
            <small>
              <Moment format='DD/MM'>{serie.expires_at}</Moment>
               - expires <Moment fromNow in>{serie.expires_at}</Moment>
            </small>
          </a>
        </li>
      )}
    </ul>
  )
}

export default Series
