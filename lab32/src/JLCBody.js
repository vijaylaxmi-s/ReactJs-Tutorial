import { Route, Routes } from "react-router-dom";
import CourseList from "./CourseList";
import MyCourseDetails from "./MyCourseDetails"

const JLCBody = () => {
  return (
    <div className="container">
      <Routes>
       <Route path="/" element={<CourseList />}/>
      <Route path="/mycourse-info/:id" element={<MyCourseDetails />}/>
      </Routes>
    </div>
  );
};

export default JLCBody;
