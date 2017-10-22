import fetch from 'isomorphic-fetch'
import * as callOptionsActions from './callOptions'
import config from 'config'

export const fetchCallOptions = () => {
  return (dispatch, getState) => {
    const { currentStock, currentSerie, capital } = getState()

    return fetch(config.API_ENDPOINT + '/api/stocks/' + currentStock.symbol + '/calls/evaluated?serie=' + currentSerie.symbol + '&capital=' + capital)
      .then(response => response.json())
      .then(json =>
        Promise.all([
          dispatch(callOptionsActions.fetchCallOptionsSuccess(json))
        ])
      )
  }
}
