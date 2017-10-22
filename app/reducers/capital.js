import types from '../actions/actionTypes'

export default (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_CAPITAL:
      return action.capital
    default:
      return state
  }
}
