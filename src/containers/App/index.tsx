import * as React from 'react';
import {useState} from 'react';

import Counter from '../../components/Counter';
import Button from '../../components/Button';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>
        -
      </Button>
      <Counter value={count} />
      <Button onClick={() => setCount(count + 1)}>
        +
      </Button>
    </div>
  );
}
