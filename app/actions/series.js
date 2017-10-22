import types from './actionTypes'
import * as callOptionActions from './callOptions.async'

export const fetchSeriesSuccess = (body) => ({
  type: types.FETCH_SERIES_SUCCESS,
  body
})

export const changeCurrentSerieResume = (serie) => ({
  type: types.CHANGE_CURRENT_SERIE,
  serie
})

export const changeCurrentSerie = (serie) => {
  return dispatch => {
    return Promise.all([
      dispatch(changeCurrentSerieResume(serie)),
      dispatch(callOptionActions.fetchCallOptions())
    ])
  }
}
