import * as actions from './series'
import types from './actionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import config from 'config'

it('#fetchSeriesSuccess', () => {
  const expected = { type: types.FETCH_SERIES_SUCCESS, body: 'test' }
  expect(actions.fetchSeriesSuccess('test')).toEqual(expected)
})

describe('with dispatch', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  let store = undefined

  beforeEach(() => {
    store = mockStore(
      {
        currentStock: { symbol: 'PETR4' },
        currentSerie: { symbol: 'B' },
        capital: 10000
      }
    )
  })

  it('#fetchSeries', () => {
    const body = [
      { symbol: 'B' },
      { symbol: 'C' }
    ]

    nock(config.API_ENDPOINT)
      .get('/api/series')
      .reply(200, body)

    nock(config.API_ENDPOINT)
      .get('/api/stocks/PETR4/calls/evaluated?serie=B&capital=10000')
      .reply(200, [])

    const expected = [
      { type: types.FETCH_SERIES_SUCCESS, body: body },
      { type: types.FETCH_CALL_OPTIONS_SUCCESS, body: [] }
    ]

    return store.dispatch(actions.fetchSeries()).then(() => {
      expect(store.getActions()).toEqual(expected)
    })
  })

  it('#changeCurrentSerie', () => {
    const serie = { symbol: 'Z' }

    nock(config.API_ENDPOINT)
      .get('/api/stocks/PETR4/calls/evaluated?serie=B&capital=10000')
      .reply(200, [])

    const expected = [
      { type: types.CHANGE_CURRENT_SERIE, serie: serie },
      { type: types.FETCH_CALL_OPTIONS_SUCCESS, body: [] }
    ]

    store.dispatch(actions.changeCurrentSerie(serie)).then(() => {
      expect(store.getActions()).toEqual(expected)
    })
  })
})
