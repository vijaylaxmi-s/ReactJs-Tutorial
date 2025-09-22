import React, { Component } from "react";
import { MyCourseConsumer } from "./CourseContext";

export class CourseComponent extends Component {
  render() {
    return (
      <MyCourseConsumer>
        {(mycourseData) => {
          const { courseId, courseName, cost, trainer } = mycourseData;
          return (
            <div className="container">
              <br />
              <b>
                <u>
                  <h2 className="text-center"> Course Info</h2>
                </u>
              </b>

              <br />
              <div>
                <h3>Course Id: {courseId}</h3>
                <h3> Course Name : {courseName}</h3>
                <h3> Cost: {cost}</h3>
                <h3> Trainer : {trainer}</h3>
              </div>
            </div>
          );
        }}
      </MyCourseConsumer>
    );
  }
}

export default CourseComponent;
