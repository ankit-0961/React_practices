import React from "react";
import UserData from "../Components/UserData";
import { Routes, Route } from "react-router-dom";
import Pagination from "../Components/Pagination";
import Timer from "../Components/Timer";
import UseState from "../Components/Hooks/UseState";
import UseEffect from "../Components/Hooks/UseEffect";
import UseContext from "../Components/Hooks/UseContext";
import UseRef from "../Components/Hooks/Useref";
import UseReducer from "../Components/Hooks/UseReducer";

function Routing() {
  return (
    <Routes>
      {/* <Route path="/userdata" element={<UserData />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/timer" element={<Timer />} /> */}
      <Route path="/usestate" element={<UseState />} />
      <Route path="/useeffect" element={<UseEffect />} />
      <Route
        path="/usecontext"
        element={<UseContext />}

        // <Route
        // path="*"
        // element={<h2 className="text-warning">Page Not Found</h2>}
      />

      <Route path="/useref" element={<UseRef />} />
      <Route path="/usereducer" element={<UseReducer />} />
    </Routes>
  );
}

export default Routing;
