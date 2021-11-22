import React, { useState } from "react";
// useState function

const UseStateBasics = () => {
  // [ value , the function]
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    if (text === "Random Title") {
      setText("Hello People");
    } else {
      setText("Random Title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Generate Random Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
