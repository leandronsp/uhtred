import types from './actionTypes'
import fetch from 'isomorphic-fetch'
import * as serieActions from './series'
import * as callOptionActions from './callOptions'
import config from 'config'


export const fetchStocksRequest = () => ({
  type: types.FETCH_STOCKS_REQUEST
})

export const fetchStocksSuccess = (body) => ({
  type: types.FETCH_STOCKS_SUCCESS,
  body
})

export const changeCurrentStockResume = (stock) => ({
  type: types.CHANGE_CURRENT_STOCK,
  stock
})

export const changeCurrentStock = (stock) => {
  return dispatch => {
    return Promise.all([
      dispatch(changeCurrentStockResume(stock)),
      dispatch(callOptionActions.fetchCallOptions())
    ])
  }
}

export const fetchStocks = () => {
  return dispatch => {
    dispatch(fetchStocksRequest())

    return fetch(config.API_ENDPOINT + '/api/stocks')
      .then(response => response.json())
      .then(json =>
        Promise.all([
          dispatch(fetchStocksSuccess(json)),
          dispatch(serieActions.fetchSeries())
        ])
     )
  }
}
