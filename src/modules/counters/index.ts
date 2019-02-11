import {createAction, handleActions} from 'redux-actions';

// Actions
const INCREMENT = 'redux-with-typescript-sandbox/counter/INCREMENT';
const DECREMENT = 'redux-with-typescript-sandbox/counter/DECREMENT';

// Action Creators
export function increment() {
  return createAction(INCREMENT)();
}

export function decrement() {
  return createAction(DECREMENT)();
}

// Reducers
export const reducer = handleActions<State>(
  {
    [INCREMENT]: (state) => ({
      count: state.count + 1,
    }),
    [DECREMENT]: (state) => ({
      count: state.count - 1,
    }),
  },
  createInitialState(),
);

interface State {
  count: number,
}

function createInitialState(): State {
  return {
    count: 0,
  };
}
