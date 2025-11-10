import React, { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  console.log(inputRef.current);

  const [value, setValue] = useState("");

  // const intervalRef = useRef("");

  const handleSubmit = (e) => {
    inputRef.current = e.target.value;

    console.log(inputRef);

    setValue(e.target.value);
    console.log(value);
  };
  // console.log(HandleSubmit);

  return (
    <div>
      <h2>UseRef</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="Form-control"
          ref={inputRef}
          onChange={handleSubmit}
        />
        <button className="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
