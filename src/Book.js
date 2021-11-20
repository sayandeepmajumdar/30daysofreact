import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  // attribute eventhandlers

  const alertHandler = () => {
    alert("Hello WOrld !!!");
  };

  const showAuthorName = (author) => {
    alert(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>

      <button type="button" onClick={alertHandler}>
        Say Hello
      </button>

      <button type="button" onClick={() => showAuthorName(author)}>
        Say Author Name
      </button>
    </article>
  );
};

export default Book;
