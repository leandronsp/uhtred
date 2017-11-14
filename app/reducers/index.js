import { combineReducers } from 'redux'

import stocks from './stocks'
import currentStock from './currentStock'
import series from './series'
import currentSerie from './currentSerie'
import callOptions from './callOptions'
import capital from './capital'
import trainData from './trainData'

const reducer = combineReducers({
  stocks,
  currentStock,
  series,
  currentSerie,
  callOptions,
  capital,
  trainData
})

export default reducer
