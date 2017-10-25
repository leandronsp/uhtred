import fetch from 'isomorphic-fetch'
import types from './actionTypes'
import config from 'config'

export const fetchCallOptionsSuccess = (body) => ({
  type: types.FETCH_CALL_OPTIONS_SUCCESS,
  body
})

export const fetchCallOptions = () => {
  return (dispatch, getState) => {
    const { currentStock, currentSerie, capital } = getState()

    return fetch(config.API_ENDPOINT + '/api/stocks/' + currentStock.symbol + '/calls/evaluated?serie=' + currentSerie.symbol + '&capital=' + capital)
      .then(response => response.json())
      .then(json => dispatch(fetchCallOptionsSuccess(json)))
  }
}
