import React, {useState, useEffect} from "react";
import s from './ButtonClicker.module.css';
import Fish from "./Fish/Fish";

function ButtonClicker() {
  const [click, setClick] = useState(false)
    
  const handleFish = () => {
    setClick(!click)
  }

  useEffect(()=>{
    console.log('Hello')
    return () => console.log('godbey') 

  }, [click]);

  return (
    <div className={s.ButtonClicker}>
        <h2>ButtonClicker</h2>
        {click ? <Fish /> : <h3>The fish swam away</h3>}
        <button className={s.btn} onClick={handleFish}>
            Taggle clicker
        </button>
    </div>
  )
}

export default ButtonClicker;