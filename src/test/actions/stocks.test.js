import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as stockActions from 'actions/stocks'
import * as stockAsyncActions from 'actions/stocks.async'
import types from 'actions/actionTypes'
import config from 'config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('#fetchStocksRequest', () => {
	const expected = { type: types.FETCH_STOCKS_REQUEST }
	expect(stockActions.fetchStocksRequest()).toEqual(expected)
})

it('#fetchStocksSuccess', () => {
	const expected = { type: types.FETCH_STOCKS_SUCCESS }
	expect(stockActions.fetchStocksSuccess()).toEqual(expected)
})

it('#fetchStocks', () => {
	const body = [
		{ symbol: 'PETR4' }
	]

  nock(config.API_ENDPOINT)
		.get('/api/stocks')
		.reply(200, body)

	const expected = [
		{ type: types.FETCH_STOCKS_REQUEST },
		{ type: types.FETCH_STOCKS_SUCCESS, body: body }
	]

	const store = mockStore()

	store.dispatch(stockAsyncActions.fetchStocks()).then(() => {
		expect(store.getActions()).toEqual(expected)
	})
})
