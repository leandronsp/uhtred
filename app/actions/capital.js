import types from './actionTypes'
import * as callOptionActions from './callOptions.async'

export const changeCapitalResume = (capital) => ({
  type: types.CHANGE_CAPITAL,
  capital
})

export const changeCapital = (capital) => {
  if (capital == undefined || capital == 0 || capital == '') {
    return changeCapitalResume(capital)
  }

  return dispatch => {
    return Promise.all([
      dispatch(changeCapitalResume(capital)),
      dispatch(callOptionActions.fetchCallOptions())
    ])
  }
}
