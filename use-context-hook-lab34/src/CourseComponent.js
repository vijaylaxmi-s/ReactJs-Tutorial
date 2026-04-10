import { useContext } from "react";
import { MyCourseContext } from "./courseContext";

const CourseComponent = () => {
  const myCourseData = useContext(MyCourseContext);
  const { courseId, courseName, cost, trainer } = myCourseData;
  return (
    <div className="container">
      <br />{" "}
      <b>
        <u>
          <h2 className="text-center"> Course Info</h2>{" "}
        </u>{" "}
      </b>
      <br />
      <div>
        <h3> Course Id: {courseId}</h3>
        <h3> Course Name : {courseName}</h3>
        <h3> Cost : {cost}</h3>
        <h3> Trainer : {trainer}</h3>
      </div>
    </div>
  );
};

export default CourseComponent;
