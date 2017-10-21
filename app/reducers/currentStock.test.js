import reducer from './currentStock'
import types  from 'actions/actionTypes'

it('returns the default state', () => {
  expect(reducer(undefined, '')).toEqual({ symbol: '' })
})

it('returns the first stock for FETCH_STOCKS_SUCCESS', () => {
  const action = {
    type: types.FETCH_STOCKS_SUCCESS,
    body: [{ symbol: 'VALE5' }, { symbol: 'PETR4' }]
  }

  expect(reducer({ symbol: 'CIEL3' }, action)).toEqual({ symbol: 'VALE5' })
})

it('changes the stock for CHANGE_CURRENT_STOCK', () => {
  const action = {
    type: types.CHANGE_CURRENT_STOCK,
    stock: { symbol: 'PETR4' }
  }

  expect(reducer({ symbol: 'CIEL3' }, action)).toEqual({ symbol: 'PETR4' })
})
