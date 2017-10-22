import { combineReducers } from 'redux'

import stocks from './stocks'
import currentStock from './currentStock'
import series from './series'
import currentSerie from './currentSerie'
import callOptions from './callOptions'

const reducer = combineReducers({
  stocks,
  currentStock,
  series,
  currentSerie,
  callOptions
})

export default reducer
