import * as actions from './stocks'
import types from './actionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import config from 'config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('#fetchStocksRequest', () => {
  const expected = { type: types.FETCH_STOCKS_REQUEST }
  expect(actions.fetchStocksRequest()).toEqual(expected)
})

it('#fetchStocksSuccess', () => {
  const expected = { type: types.FETCH_STOCKS_SUCCESS }
  expect(actions.fetchStocksSuccess()).toEqual(expected)
})

it('#changeCurrentStockResume', () => {
  const expected = { type: types.CHANGE_CURRENT_STOCK, stock: { symbol:'CIEL3' }}
  expect(actions.changeCurrentStockResume({ symbol: 'CIEL3' })).toEqual(expected)
})

it('#changeCurrentStock', () => {
  // to be implemented
})

it('#fetchStocks', () => {
  const body = [
    { symbol: 'PETR4' }
  ]

  nock(config.API_ENDPOINT).get('/api/stocks').reply(200, body)
  nock(config.API_ENDPOINT).get('/api/series').reply(200, [])

  nock(config.API_ENDPOINT)
    .get('/api/stocks/PETR4/calls/evaluated?serie=B&capital=10000')
    .reply(200, [])

  const expected = [
    { type: types.FETCH_STOCKS_REQUEST },
    { type: types.FETCH_STOCKS_SUCCESS, body: body },
    { type: types.FETCH_SERIES_SUCCESS, body: [] }
  ]

  const store = mockStore(
    {
      currentStock: { symbol: 'PETR4' },
      currentSerie: { symbol: 'B' },
      capital: 10000
    }
  )

  return store.dispatch(actions.fetchStocks()).then(() => {
    expect(store.getActions()).toEqual(expected)
  })
})
