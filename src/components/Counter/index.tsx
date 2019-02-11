import * as React from 'react';

interface Props {
  value: number,
}

export default function Counter({value}: Props) {
  return <span>{value}</span>;
}
