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

  const expected = [
    { symbol: 'B', index: 0 }, { symbol: 'C', index: 1 }
  ]

  expect(reducer([{ symbol: 'A' }], action)).toEqual(expected)
})
