import types from './actionTypes'
import * as callOptionActions from './callOptions'

export const changeCapitalResume = (capital) => ({
  type: types.CHANGE_CAPITAL,
  capital
})

export const changeCapital = (capital) => {
  if (capital == undefined || capital == 0 || capital == '') {
    return changeCapitalResume(capital)
  }

  return dispatch => {
    dispatch(changeCapitalResume(capital))
    dispatch(callOptionActions.fetchCallOptions())
  }
}
