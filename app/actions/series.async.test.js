import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as actions from './series.async'
import types from './actionTypes'
import config from 'config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('#fetchSeries', () => {
  const body = [
    { symbol: 'B' },
    { symbol: 'C' }
  ]

  nock(config.API_ENDPOINT)
    .get('/api/series')
    .reply(200, body)

  const expected = [
    { type: types.FETCH_SERIES_SUCCESS, body: body }
  ]

  const store = mockStore()

  store.dispatch(actions.fetchSeries()).then(() => {
    expect(store.getActions()).toEqual(expected)
  })
})
