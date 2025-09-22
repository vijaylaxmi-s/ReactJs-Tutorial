import React, { Component } from "react";
import { MyStudentConsumer } from "./StudentContext";

export class StudentComponent extends Component {
  render() {
    return (
      <MyStudentConsumer>
        {(mystudentData) => {
          const { studentId, studentName, email, phone } = mystudentData;
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
                <h3>Studen Id: {studentId}</h3>
                <h3> Student Name : {studentName}</h3>
                <h3> Email Id: {email}</h3>
                <h3> Phone No : {phone}</h3>
              </div>
            </div>
          );
        }}
      </MyStudentConsumer>
    );
  }
}

export default StudentComponent;
