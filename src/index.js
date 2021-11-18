import React from "react";
import ReactDOM from "react-dom";

//stateless functional component
// always return JSX
//have to return something & two component won't have same name

function Greeting() {
  return <h4>Hello World, Welcome to React World</h4>;
}

// const Greeting = () => {
//   return React.createElement("h4", {}, "Hello world");
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
