import { useState } from "react";
import "./index.css";

function App() {
  return <DateCounter />;
}

function DateCounter() {
  const [inputValue, setInputValue] = useState(0);
  const [rangeBarValue, setRangeBarValue] = useState(0);
  const currentDate = new Date();
  const updatedDate = new Date(currentDate);
  updatedDate.setDate(updatedDate.getDate() + inputValue);

  // const [count, setCount] = useState(0);
  function countInc() {
    setInputValue((c) => c + rangeBarValue);
  }
  function countDec() {
    setInputValue((c) => c - 1);
  }
  // function rangeBarInc() {
  //   setRangeBarValue((c) => c + 1);
  // }
  function reset() {
    setInputValue(0);
    setRangeBarValue(0);
  }
  return (
    <>
      <div className="container">
        <input
          type="range"
          min={0}
          max={10}
          value={rangeBarValue}
          onChange={(e) => setRangeBarValue(Number(e.target.value))}
        />
        {rangeBarValue}
        <div>
          <button onClick={countDec}>-</button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
          <span>{inputValue}</span>
          <button onClick={countInc}>+</button>
        </div>
        <p>
          <span>
            {inputValue === 0
              ? "Today is "
              : inputValue > 0
              ? `${inputValue} days from today is `
              : `${Math.abs(inputValue)} days ago was`}
          </span>
          <span> {updatedDate.toDateString()}</span>
        </p>
        {inputValue > 0 ? <button onClick={reset}>Reset</button> : ""}
      </div>
    </>
  );
}
export default App;
