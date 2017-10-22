import types from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CALL_OPTIONS_SUCCESS:
      return action.body.map((callOption, index) =>
        Object.assign({}, callOption, {index})
      )
    default:
      return state
  }
}
