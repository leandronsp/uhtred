import * as actions from './stocks'
import types from './actionTypes'

it('#fetchStocksRequest', () => {
  const expected = { type: types.FETCH_STOCKS_REQUEST }
  expect(actions.fetchStocksRequest()).toEqual(expected)
})

it('#fetchStocksSuccess', () => {
  const expected = { type: types.FETCH_STOCKS_SUCCESS }
  expect(actions.fetchStocksSuccess()).toEqual(expected)
})
