import { combineReducers } from 'redux';

import stocks from './stocks';
import currentStock from './currentStock';
import series from './series';
import currentSerie from './currentSerie';

const reducer = combineReducers({
  stocks,
  currentStock,
  series,
  currentSerie
});

export default reducer;
