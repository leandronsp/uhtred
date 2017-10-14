import * as actions from 'actions/stocks'
import types from 'actions/actionTypes'

it('#fetchStocksRequest', () => {
  const expected = { type: types.FETCH_STOCKS_REQUEST }
  expect(actions.fetchStocksRequest()).toEqual(expected)
})

it('#fetchStocksSuccess', () => {
  const expected = { type: types.FETCH_STOCKS_SUCCESS }
  expect(actions.fetchStocksSuccess()).toEqual(expected)
})
