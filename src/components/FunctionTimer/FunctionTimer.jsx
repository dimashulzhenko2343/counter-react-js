import React, { useState, useEffect, useRef } from "react";
import s from "./FunctionTimer.module.css";


function setDefaultValue() {
  const userCount = localStorage.getItem('count');
  return userCount ? +userCount : 0;
}


function FunctionTimer() {
  const [count, setCount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(false);
  const timerIDRef = useRef(null);
 
  const handleReset = () => {
    setCount(0);
    setIsCount(false);
  };

  const handleStart = () => {
    setIsCount( true );

    timerIDRef.current = setInterval(() => {
      setCount( (prevCount) => prevCount + 1 );
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerIDRef.current);
    setIsCount(false)
  };

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);


  useEffect(() => {
    if (!isCounting) {
      timerIDRef.current = setInterval(() => {
        setCount((prevCount => prevCount + 1))
      }, 1000)
    }

    return () => {
      timerIDRef.current && clearInterval(timerIDRef.current);
      timerIDRef.current = null;
    }
  }, [isCounting]);

    return (
      <div className={s.FunctionTimer}>
        <h2>Timer</h2>
        <div className={s.countTimer}>{count}</div>
        <div className={s.blockButton}>
          {isCounting ? (
            <button onClick={handleStop}>stop</button>
          ) : (
            <button onClick={handleStart}>start</button>
          )}
          <button disabled={count === 0} onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    );
  
}

export default FunctionTimer;
