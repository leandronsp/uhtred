import configureStore from 'redux-mock-store'
import * as actions from '../src/actions/numbers'
import types from '../src/actions/actionTypes'

const middlewares = []
const mockStore = configureStore(middlewares)

it('dispatches increment action', () => {
	const initialState = {}
	const store = mockStore(initialState)
	store.dispatch(actions.increment(42))

	const dispatchedActions = store.getActions()
	const expected = { type: types.INCREMENT, number: 42 }
	expect(dispatchedActions).toEqual([expected])
})

it('dispatches decremet action', () => {
	const initialState = {}
	const store = mockStore(initialState)
	store.dispatch(actions.decrement(42))

	const dispatchedActions = store.getActions()
	const expected = { type: types.DECREMENT, number: 42 }
	expect(dispatchedActions).toEqual([expected])
})
