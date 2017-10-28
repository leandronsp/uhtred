import fetch from 'isomorphic-fetch'
import config from 'config'
import types from './actionTypes'
import * as callOptionActions from './callOptions'

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
    Promise.all([
      dispatch(changeCurrentSerieResume(serie)),
      dispatch(callOptionActions.fetchCallOptions())
    ])
  }
}

export const fetchSeries = () => {
  return dispatch => {
    return fetch(config.API_ENDPOINT + '/api/series')
      .then(response => response.json())
      .then(json =>
        Promise.all([
          dispatch(fetchSeriesSuccess(json)),
          dispatch(callOptionActions.fetchCallOptions())
        ])
      )
  }
}
