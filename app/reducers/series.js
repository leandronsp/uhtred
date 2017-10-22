import types from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_SERIES_SUCCESS:
      return action.body.map((serie, index) =>
        Object.assign({}, serie, {index})
      )
    default:
      return state
  }
}
