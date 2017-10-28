import * as actions from './callOptions'
import types from './actionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import config from 'config'

it('#fetchCallOptionsSuccess', () => {
  const expected = { type: types.FETCH_CALL_OPTIONS_SUCCESS }
  expect(actions.fetchCallOptionsSuccess()).toEqual(expected)
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

  it('#fetchCallOptions', () => {
    const body = [
      { symbol: 'PETRK28' }
    ]

    nock(config.API_ENDPOINT)
      .get('/api/stocks/PETR4/calls/evaluated?serie=B&capital=10000')
      .reply(200, body)

    const expected = [
      { type: types.FETCH_CALL_OPTIONS_SUCCESS, body: body }
    ]

    return store.dispatch(actions.fetchCallOptions()).then(() => {
      expect(store.getActions()).toEqual(expected)
    })
  })
})

