import types from '../actions/actionTypes'

export default (state = false, action) => {
  switch (action.type) {
    case types.TRAIN_DATA_REQUEST:
      return true
    case types.TRAIN_DATA_SUCCESS:
      return false
    default:
      return state
  }
}
