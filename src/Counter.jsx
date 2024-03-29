import React from 'react';
import './App.css';
import HOC from './withCounterHOC';

function Counter({ count, incrementCount, name }) {
  return (
    <div>
      <button onClick={incrementCount}>Click {count} times</button>
    </div>
  );
}

export default HOC(Counter);
