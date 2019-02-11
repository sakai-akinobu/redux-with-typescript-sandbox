import {combineReducers} from 'redux';

import {reducer as counters, State as CountersState} from './counters';

export const rootReducer = combineReducers<any>({
  counters,
});

export interface AppState {
  counters: CountersState,
}
