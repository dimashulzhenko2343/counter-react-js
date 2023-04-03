import React, { useState } from "react";
import s from "./FunctionCounter.module.css";

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const handelPlus = () => {
    setCount(count + 1);
  };

  const handelReset = () => {
    setCount(0)
  }

  const handelMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className={s.funtionCounter}>
      <h2>FunctCounter</h2>
      <div className={s.counterDisplay}>{count}</div>
      <button onClick={handelPlus}>+1</button>
      <button disabled={count === 0} onClick={handelReset}>reset</button>
      <button disabled={count === 0} onClick={handelMinus}>-1</button>
    </div>
  );
}

export default FunctionCounter;
