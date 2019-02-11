import {combineReducers} from 'redux';

import {reducer as counters} from './counters';

export const rootReducer = combineReducers<any>({
  counters,
});
