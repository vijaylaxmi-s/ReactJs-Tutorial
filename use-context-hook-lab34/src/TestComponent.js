import { useContext } from "react";
import { MyStudentContext } from "./studentContext";
import { MyCourseContext } from "./courseContext";

const TestComponent = () => {
  const myStudentData = useContext(MyStudentContext);
  const myCourseData = useContext(MyCourseContext);
  const { studentId, studentName, email, phone } = myStudentData;
  const { courseId, courseName, cost, trainer } = myCourseData;

  return (
    <div className="container">
      <br />
      <b>
        <u>
          <h2 className="text-center"> Student Info</h2>
        </u>
      </b>
      <br />
      <div>
        <h3>Student ID: {studentId}</h3>
        <h3> Student Name : {studentName}</h3>
        <h3> Email Id: {email}</h3>
        <h3> Phone No : {phone}</h3>
        <h3> Course Id: {courseId}</h3>
        <h3> Course Name : {courseName}</h3>
        <h3> Cost : {cost}</h3>
        <h3> Trainer : {trainer}</h3>
      </div>
    </div>
  );
};

export default TestComponent;
