import React from "react";
// practice ground
const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = () => {
    title = "Welcome Mate";
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Generate Random Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
