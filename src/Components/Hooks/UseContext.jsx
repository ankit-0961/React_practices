import React, { createContext } from "react";
import Comp1 from "./Comp1";

export const UserContext = createContext();

const UseContext = () => {
  const PersonDetails = {
    name: "peter",
    age: 24,
  };

  return (
    <div>
      <h2>UseContext</h2>
      <UserContext.Provider value={PersonDetails}>
        <Comp1 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;
