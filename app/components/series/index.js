import React from 'react'

const Series = ({series, currentSerie, actions}) => {
  return (
    <ul>
      {series.map(serie =>
        <li key={serie.symbol}>
          <a
            href='javascript:void(0)'
            onClick={() => actions.changeCurrentSerie(serie)}>{serie.symbol}
          </a>
        </li>
      )}
    </ul>
  )
}

export default Series
