import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    if (count >= 1) {
      setcount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
