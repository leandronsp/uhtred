import types from './actionTypes'

export const fetchSeriesSuccess = (body) => ({
  type: types.FETCH_SERIES_SUCCESS,
  body
})

export const changeCurrentSerie = (serie) => ({
  type: types.CHANGE_CURRENT_SERIE,
  serie
})
