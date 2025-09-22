import React, { Component } from "react";
import { MyCourseConsumer } from "./CourseContext";
import { MyStudentConsumer } from "./StudentContext";

export class TestComponent extends Component {
  render() {
    return (
      <MyStudentConsumer>
        {(mystudentData) => {
          const { studentId, studentName, email, phone } = mystudentData;
          return (
            <MyCourseConsumer>
              {(mycourseData) => {
                const { courseId, courseName, cost, trainer } = mycourseData;
                return (
                  <div className="container">
                    <br />
                    <b>
                      <u>
                        <h2 className="text-center"> Test Info</h2>{" "}
                      </u>{" "}
                    </b>
                    <br />
                    <div>
                      <h3> Student ID : {studentId}</h3>
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
              }}
            </MyCourseConsumer>
          );
        }}
      </MyStudentConsumer>
    );
  }
}

export default TestComponent;
