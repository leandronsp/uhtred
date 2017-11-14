import types from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CALL_OPTIONS_SUCCESS:
      return action.body.map((callOption, index) =>
        Object.assign({}, callOption, {index})
      )
    case types.CHANGE_CALL_OPTION_SCORE:
      return state.map((callOption) =>
        callOption.symbol == action.callOption.symbol ? Object.assign({}, callOption, {score: action.score}) : callOption
      )
    default:
      return state
  }
}
