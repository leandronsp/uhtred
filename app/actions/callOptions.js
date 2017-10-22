import types from './actionTypes'

export const fetchCallOptionsSuccess = (body) => ({
  type: types.FETCH_CALL_OPTIONS_SUCCESS,
  body
})
