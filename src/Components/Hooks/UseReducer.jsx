import React, { useReducer } from "react";

const UseReducer = () => {
  const reducer = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return currentState + action.payload;

      case "decrement":
        return currentState - action.payload;

      case "reset":
        return action.payload;
      default:
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>UseReducer</h2>
      <h2>count :{count}</h2>
      <button
        className="btn btn-primary m-2"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Increment
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Decrement
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch({ type: "reset", payload: 0 })}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
