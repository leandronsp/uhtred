import types from './actionTypes'

export const fetchStocksRequest = () => ({
  type: types.FETCH_STOCKS_REQUEST
})

export const fetchStocksSuccess = (body) => ({
  type: types.FETCH_STOCKS_SUCCESS,
  body
})
