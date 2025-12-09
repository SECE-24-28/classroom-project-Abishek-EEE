import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease(){
    setCount(count-1);
  } 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increase}>ADD</button>
      <button onClick={Decrease}>SUB</button>
    </div>
  );
}

export default Counter;