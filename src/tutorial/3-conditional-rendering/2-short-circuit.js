import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world"; //first text is false then it will print hello world
  // const secondValue = text && "hello world"; // first text has to be true to print hello world

  return (
    <>
      <h2>{text || "John"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* <h3>Value: {secondValue && "2"}</h3>
      <h3>! Value: {!secondValue && "2"}</h3> */}
      <h3>{isError && <h2>error...</h2>}</h3>
      <h3>
        {isError ? <p>There is error...</p> : <p>There is no error...</p>}
      </h3>
    </>
  );
};

export default ShortCircuit;
