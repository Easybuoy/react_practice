import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count+1);
  };
  return (
    <div className="App">
      <button onClick={incrementCount}>Click {count} times</button>
    </div>
  );
}

export default App;
