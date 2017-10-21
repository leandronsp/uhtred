import types from '../actions/actionTypes'

const defaultState = { symbol: '' }

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_STOCKS_SUCCESS:
      return action.body[0]
    case types.CHANGE_CURRENT_STOCK:
      return action.stock
    default:
      return state
  }
}
