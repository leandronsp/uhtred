import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as actions from './stocks.async'
import types from './actionTypes'
import config from 'config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('#fetchStocks', () => {
  const body = [
    { symbol: 'PETR4' }
  ]

  nock(config.API_ENDPOINT)
    .get('/api/stocks')
    .reply(200, body)

  const expected = [
    { type: types.FETCH_STOCKS_REQUEST },
    { type: types.FETCH_STOCKS_SUCCESS, body: body }
  ]

  const store = mockStore()

  store.dispatch(actions.fetchStocks()).then(() => {
    expect(store.getActions()).toEqual(expected)
  })
})
