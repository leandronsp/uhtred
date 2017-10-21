import { combineReducers } from 'redux';

import stocks from './stocks';
import currentStock from './currentStock';
import series from './series';

const reducer = combineReducers({
  stocks,
  currentStock,
  series
});

export default reducer;
