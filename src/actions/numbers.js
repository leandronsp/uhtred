import types from './actionTypes'

export const increment = number => ({
	type: types.INCREMENT,
	number
})

export const decrement = number => ({
	type: types.DECREMENT,
	number
})
