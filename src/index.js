import React from "react";
import ReactDOM from "react-dom";
//css importing
import "./index.css";

//stateless functional component
// always return JSX
//have to return something & two component won't have same name
//  <>  </>  // react fragment
// use camelCase for html attributes
//close all elements

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h4", {}, "Hello world")
//   );
// };

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="https://m.media-amazon.com/images/I/41-G7AIOZyL.jpg" />;
};

const Title = () => {
  return (
    <h1>
      Do It Today: Overcome Procrastination, Improve Productivity, and Achieve
      More Meaningful Things
    </h1>
  );
};

const Author = () => {
  return <h4>by Darius Foroux</h4>;
};

ReactDOM.render(<BookList />, document.getElementById("root"));
