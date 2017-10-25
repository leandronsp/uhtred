import fetch from 'isomorphic-fetch'
import * as serieActions from './series'
import * as callOptionActions from './callOptions.async'
import config from 'config'

export const fetchSeries = () => {
  return dispatch => {
    return fetch(config.API_ENDPOINT + '/api/series')
      .then(response => response.json())
      .then(json => {
        dispatch(serieActions.fetchSeriesSuccess(json))
        dispatch(callOptionActions.fetchCallOptions())
      })
  }
}
