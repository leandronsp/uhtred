import reducer from './stocks'
import types  from 'actions/actionTypes'

it('returns the default state', () => {
  expect(reducer(undefined, '')).toEqual([])
})

it('returns the new state for FETCH_STOCKS_SUCCESS', () => {
  const action = {
    type: types.FETCH_STOCKS_SUCCESS,
    body: [{ symbol: 'VALE5' }, { symbol: 'PETR4' }]
  }

  expect(reducer([{ symbol: 'CIEL3' }], action)).toEqual(action.body)
})
