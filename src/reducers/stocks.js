import types from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_STOCKS_SUCCESS:
      return action.body
    default:
      return state
  }
}
