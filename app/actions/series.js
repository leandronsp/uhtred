import types from './actionTypes'

export const fetchSeriesSuccess = (body) => ({
  type: types.FETCH_SERIES_SUCCESS,
  body
})
