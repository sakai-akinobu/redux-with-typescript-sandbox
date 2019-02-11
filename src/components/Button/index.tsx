import * as React from 'react';

interface Props {
  onClick: () => void,
  children: React.ReactChild,
}

export default function Button({onClick, children}: Props) {
  return <button onClick={onClick}>{children}</button>
}
