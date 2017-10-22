import fetch from 'isomorphic-fetch'
import * as callOptionsActions from './callOptions'
import config from 'config'

export const fetchCallOptions = () => {
  return (dispatch, getState) => {
    const { currentStock, currentSerie } = getState()

    return fetch(config.API_ENDPOINT + '/api/stocks/' + currentStock.symbol + '/calls?serie=' + currentSerie.symbol)
      .then(response => response.json())
      .then(json =>
        Promise.all([
          dispatch(callOptionsActions.fetchCallOptionsSuccess(json))
        ])
      )
  }
}
