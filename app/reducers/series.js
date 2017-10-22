import types from '../actions/actionTypes'

const callOptions = 'ABCDEFGHIJKL'.split('')

export default (state = [], action) => {
  switch (action.type) {
    case types.FETCH_SERIES_SUCCESS:
      const series = action.body.filter(serie =>
        callOptions.includes(serie.symbol)
      )

      return series.map((serie, index) =>
        Object.assign({}, serie, {index})
      )
    default:
      return state
  }
}
