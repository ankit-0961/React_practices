import react from "react";
import "./App.css";
import ClassComp from "./Components/ClassComp";
import FunctionComp from "./Components/FunctionComp";
import Counter from "./Components/Counter";
import Task from "./Components/Task";
import ContactUs from "./Components/ContactUs";
import StyleComp from "./Components/StyleComp";
import UserData from "./Components/UserData";
import Pagination from "./Components/Pagination";
import Timer from "./Components/Timer";
import Navbar2 from "./Components/Navbar2";
import Routing from "./routes/Routing";

function App() {
  // const courseName="ReactJs";
  // const Duration="3 months";

  // const CourseDetails={
  //   course:"NextJs",
  //   Duration:"1 Months"

  // }

  return (
    <div>
      {/* <ClassComp course={courseName} Duration={Duration}/>
   <hr />
   <FunctionComp courseData={CourseDetails}/> */}
      {/* <Counter/> */}
      {/* <Task/> */}
      {/* <ContactUs/> */}
      {/* <StyleComp/> */}
      {/* <UserData/> */}
      {/* <Users/> */}

      {/* <DynamicStyle /> */}

      {/* <ConditionalStylingprops Status="success" />
      <ConditionalStylingprops Status="error" />
      <ConditionalStylingprops Status="pending" />
      <ConditionalStylingprops Status="other" /> */}

      {/* <TodoList /> */}
      {/* <Pagination /> */}
      {/* <Timer /> */}
      {/* <Navbar /> */}
      <Navbar2 />
      <Routing />

      {/* <RoutingsT /> */}
    </div>
  );
}

export default App;
