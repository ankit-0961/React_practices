import React, { useState } from "react";

const UseState = () => {
  const [count, setcount] = useState(0);

  const IncreamentHandler = () => {
    setcount(count + 1);
  };
  const DecreamentHandler = () => {
    setcount(count - 1);
  };
  // ResetHandler = () => {};
  return (
    <div>
      <h2>UseState</h2>
      <h5>{count}</h5>
      <button className="btn btn-primary" onClick={IncreamentHandler}>
        Increament
      </button>
      <button className="btn btn-success" onClick={DecreamentHandler}>
        Decreament
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setcount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseState;
//onClick={DecreamentHandler}
