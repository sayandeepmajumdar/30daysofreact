import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 16,
    message: "Welcome React Dev",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Welcome Sayandeep Dev" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={changeMessage} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
