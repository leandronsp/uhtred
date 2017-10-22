import types from '../actions/actionTypes'

const defaultState = { symbol: '', index: 0 }

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_SERIES_SUCCESS:
      return Object.assign({}, action.body[0], {index: 0})
    case types.CHANGE_CURRENT_SERIE:
      return Object.assign({}, action.serie, {index: action.serie.index || 0})
    default:
      return state
  }
}
