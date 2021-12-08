import React, { useState, useEffect } from "react";

// show/hide different component

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize); // this is for clean up function
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Window</h2>
      <h2>Size: {size}</h2>
    </div>
  );
};
export default ShowHide;
