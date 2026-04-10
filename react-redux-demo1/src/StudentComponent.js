import React from "react"; 
import { connect } from 'react-redux'; 

const StudentComponent = (props) => {
  const { studentId, studentName, email, phone } = props.myStudentData;

  return (
    <div className="container">
      <br />{" "}
      <b>
        <u>
          <h2 className="text-left"> Student Info</h2>{" "}
        </u>{" "}
      </b>
      <br />
      <div className="text-left">
        <h3>Student ID: {studentId} </h3>
        <h3> Student Name : {studentName}</h3>
        <h3> Email Id: {email}</h3>
        <h3> Phone No : {phone}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myStudentData: state.mystudent
  }
}

export default connect(mapStateToProps)(StudentComponent);
