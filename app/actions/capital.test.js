import * as actions from './capital'
import types from './actionTypes'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import config from 'config'

it('#changeCapitalResume', () => {
  const expected = { type: types.CHANGE_CAPITAL, capital: 900 }
  expect(actions.changeCapitalResume(900)).toEqual(expected)
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

  describe('#changeCapital', () => {
    it('changes capital and fetches call options', () => {
      nock(config.API_ENDPOINT)
        .get('/api/stocks/PETR4/calls/evaluated?serie=B&capital=10000')
        .reply(200, [])

      const expected = [
        { type: types.CHANGE_CAPITAL, capital: 900 },
        { type: types.FETCH_CALL_OPTIONS_SUCCESS, body: [] }
      ]

      return store.dispatch(actions.changeCapital(900)).then(() => {
        expect(store.getActions()).toEqual(expected)
      })
    })

    it('changes capital but does not fetch call options if undefined', () => {
      store.dispatch(actions.changeCapital(undefined))
      expect(store.getActions()).toEqual([{ type: types.CHANGE_CAPITAL, capital: undefined }])
    })

    it('changes capital but does not fetch call options if empty', () => {
      store.dispatch(actions.changeCapital(''))
      expect(store.getActions()).toEqual([{ type: types.CHANGE_CAPITAL, capital: '' }])
    })

    it('changes capital but does not fetch call options if zero', () => {
      store.dispatch(actions.changeCapital(0))
      expect(store.getActions()).toEqual([{ type: types.CHANGE_CAPITAL, capital: 0 }])
    })
  })

})
