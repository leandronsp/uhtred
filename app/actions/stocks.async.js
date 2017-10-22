import fetch from 'isomorphic-fetch'
import * as stockActions from './stocks'
import * as serieActions from './series.async'
import config from 'config'

export const fetchStocks = () => {
  return dispatch => {
    dispatch(stockActions.fetchStocksRequest())

    return fetch(config.API_ENDPOINT + '/api/stocks')
      .then(response => response.json())
      .then(json =>
        Promise.all([
          dispatch(stockActions.fetchStocksSuccess(json)),
          dispatch(serieActions.fetchSeries())
        ])
      )
  }
}
