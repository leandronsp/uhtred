import types from './actionTypes'
import * as callOptionActions from './callOptions.async'

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
