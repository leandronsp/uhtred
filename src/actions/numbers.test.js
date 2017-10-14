import * as actions from './numbers'
import types from './actionTypes'

describe('actions', () => {
	it('creates an action to increment a number', () => {
		const expected = {
			type: types.INCREMENT,
			number: 42
		}

		expect(actions.increment(42)).toEqual(expected)
	})
})
