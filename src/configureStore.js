import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()
  const middlewares = [thunk, logger]
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  )

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}

export default configureStore
