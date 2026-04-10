import { useContext } from "react";
import { MyStudentContext } from "./studentContext";

const StudentComponent = (props) => {
  const myStudentData = useContext(MyStudentContext);
  const { studentId, studentName, email, phone } = myStudentData;

  return (
    <div className="container">
      <br />{" "}
      <b>
        <u>
          <h2 className="text-center"> Student Info</h2>{" "}
        </u>{" "}
      </b>
      <br />
      <div>
        <h3>Student ID: {studentId} </h3>
        <h3> Student Name : {studentName}</h3>
        <h3> Email Id: {email}</h3>
        <h3> Phone No : {phone}</h3>
      </div>
    </div>
  );
};

export default StudentComponent;
