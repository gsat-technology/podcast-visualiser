import { combineReducers } from 'redux';
import search from './search'
import podcast from './podcast'

const rootReducer = combineReducers({
  search,
  podcast
});

export default rootReducer;
