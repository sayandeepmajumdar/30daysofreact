import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrement = () => {
    // 1st parameter is callback func 2nd parameter is time in milli seconds
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => reset()}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexIncrement}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
