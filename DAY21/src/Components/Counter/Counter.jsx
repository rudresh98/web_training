import style from "./Counter.module.css";
import { useState } from "react";
const Counter = () => {
  let [counter, setCounter] = useState(0);
  let [msg, setMsg] = useState("");
  const sum = () => {
    counter = counter + 1;
    setCounter(counter);
    checkCounterValue();
  };
  const sub = () => {
    counter = counter - 1;
    setCounter(counter);
    checkCounterValue();
  };
  const clear = () => {
    counter = 0;
    setCounter(counter);
    checkCounterValue();
  };
  const checkCounterValue = () => {
    let customMsg = "";
    if (counter < 0) {
      customMsg = "Value is negative";
      setMsg(customMsg);
    } else {
      customMsg = "";
      setMsg(customMsg);
    }
  };
  return (
    <>
      <div className={style.custombtn}>
        <button onClick={() => sum()}>ADD</button>
        <button onClick={sub}>SUB</button>
      </div>
      <div className={style.counter}>
        <p>{counter}</p>
        <span>{msg}</span>
      </div>
      <div className={style.customclr}>
        <button onClick={clear}>Clear</button>
      </div>
    </>
  );
};

export default Counter;
