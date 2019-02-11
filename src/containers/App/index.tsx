import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {
  increment,
  decrement,
} from '../../modules/counters';
import Counter from '../../components/Counter';
import Button from '../../components/Button';

interface Props {
  count: number,
  actions: {
    increment: () => void,
    decrement: () => void,
  },
}

function App(props: Props) {
  const {
    count,
    actions,
  } = props;

  return (
    <div>
      <Button onClick={actions.decrement}>
        -
      </Button>
      <Counter value={count} />
      <Button onClick={actions.increment}>
        +
      </Button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.counters.count,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
