import { combineReducers } from 'redux';

import stocks from './stocks';
import currentStock from './currentStock';

const reducer = combineReducers({
  stocks,
  currentStock
});

export default reducer;
