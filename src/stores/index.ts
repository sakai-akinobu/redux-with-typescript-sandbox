import {createStore as _createStore} from 'redux';

import {rootReducer} from '../modules/reducers';

export function createStore() {
  return _createStore(rootReducer);
}
