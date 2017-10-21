import reducer from './series'
import types  from 'actions/actionTypes'

it('returns the default state', () => {
  expect(reducer(undefined, '')).toEqual([])
})

it('returns the new state for FETCH_SERIES_SUCCESS', () => {
  const action = {
    type: types.FETCH_SERIES_SUCCESS,
    body: [{ symbol: 'B' }, { symbol: 'C' }]
  }

  expect(reducer([{ symbol: 'A' }], action)).toEqual(action.body)
})
