import reducer from './currentSerie'
import types  from 'actions/actionTypes'

it('returns the default state', () => {
  expect(reducer(undefined, '')).toEqual({ symbol: '', index: 0 })
})

it('returns the first serie for FETCH_SERIES_SUCCESS', () => {
  const action = {
    type: types.FETCH_SERIES_SUCCESS,
    body: [{ symbol: 'C' }, { symbol: 'D' }]
  }

  expect(reducer({ symbol: 'A' }, action)).toEqual({ symbol: 'C', index: 0 })
})

it('changes the serie for CHANGE_CURRENT_SERIE', () => {
  const action = {
    type: types.CHANGE_CURRENT_SERIE,
    serie: { symbol: 'C', index: 2 }
  }

  expect(reducer({ symbol: 'A' }, action)).toEqual({ symbol: 'C', index: 2 })
})

it('changes the serie for CHANGE_CURRENT_SERIE and uses default index', () => {
  const action = {
    type: types.CHANGE_CURRENT_SERIE,
    serie: { symbol: 'C' }
  }

  expect(reducer({ symbol: 'A' }, action)).toEqual({ symbol: 'C', index: 0 })
})
