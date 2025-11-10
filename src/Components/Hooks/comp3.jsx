import React, { useContext } from "react";
import { UserContext } from "./UseContext";

const comp3 = () => {
  const UserData = useContext(UserContext);
  console.log(UserData);

  return (
    <div>
      <h2>comp3</h2>
    </div>
  );
};

export default comp3;
