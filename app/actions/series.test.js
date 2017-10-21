import * as actions from './series'
import types from './actionTypes'

it('#fetchSeriesSuccess', () => {
  const expected = { type: types.FETCH_SERIES_SUCCESS, body: 'test' }
  expect(actions.fetchSeriesSuccess('test')).toEqual(expected)
})
