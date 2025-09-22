import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from "./Courses";

const App =  () => {

  const [courseFlagState, setCourseFlagState] = useState(true);

  useEffect(() =>{
  console.log("[App] - 1st - useEffect()");
  //Do Initialization
  //http calls
  return () =>{
      //cleanup
      console.log("[App] - Cleanup -  1st - useEffect()");
  }
  });

  useEffect(() =>{
    console.log("[App] - 2nd - useEffect()");
    return () =>{
      //cleanup
      console.log("[App] - Cleanup -  2nd - useEffect()");
  }
  });

  useEffect(() =>{
    console.log("[App] - 3rd - useEffect()");
    return () => {
      //cleanup
     console.log("[App] - Cleanup -  3rd - useEffect()");
 }
  });

  const hideShowCourses = () =>{
    console.log("[App] - hideShowCourses()")
    setCourseFlagState (!courseFlagState)

  }

  let mycourse =  null;
  if (courseFlagState === true) {
    mycourse = (<Courses />);
  }

  return (
   <div className="container">
    <h1 className="text-center">Welcome to CourseCube!!</h1>
    <br/>
    <button className="btn btn-success" onClick={hideShowCourses}>
            Hide show Courses
            </button>  
            <br/> <br/>

    {mycourse}

   </div>

  );

}

export default App;

