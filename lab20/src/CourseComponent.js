import React, { Component } from "react";
import { MyCourseConsumer } from "./CourseContext";

export class CourseComponent extends Component {
  updateCourseName = (updatedCName, mydispatch) => {
    console.log("A", "CourseComponent- updatedCourseName", updatedCName);
    mydispatch({
      type: "UPDATE_CNAME",
      payload: updatedCName,
    });
  };

  updatePrice = (updatedPrice, mydispatch) => {
    console.log("A", "CourseComponent - updatePrice", updatedPrice);
    mydispatch({
      type: "UPDATE_PRICE",
      payload: updatedPrice,
    });
  };
  updateDuration = (updatedDuration, mydispatch) => {
    console.log("A", "CourseComponent - updateDuration", updatedDuration);
    mydispatch({
      type: "UPDATE_DURATION",
      payload: updatedDuration,
    });
  };

  updateTrainer = (updatedTrainer, mydispatch) => {
    console.log("A", "CourseComponent - updateTrainer", updatedTrainer);
    mydispatch({
      type: "UPDATE_TRAINER",
      payload: updatedTrainer,
    });
  };

  render() {
    return (
      <MyCourseConsumer>
        {(mycourseData) => {
          const { mydispatch } = mycourseData;
          const { courseId, courseName, price, duration, trainer } =
            mycourseData;
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
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h4>Course Id: {courseId}</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4> Course Name : {courseName}</h4>
                      </td>
                      <td>
                        <button
                          onClick={this.updateCourseName.bind(
                            this,
                            "Master React 16",
                            mydispatch
                          )}
                          className="btn btn-success">
                          Update Course Name
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4> Price : {price}</h4>
                      </td>
                      <td>
                        <button onClick={this.updatePrice.bind(this,13000,mydispatch)} className="btn btn-success">Update Price</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4> Duraion : {duration}</h4>
                      </td>
                      <td>
                        <button onClick={this.updateDuration.bind(this,"75 Hrs",mydispatch)} 
className="btn btn-success"> Update Duraion </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h4> Trainer : {trainer}</h4>
                      </td>
                      <td>
                        <button  onClick={this.updateTrainer.bind(this,"Srinivas Dande",mydispatch)} 
className="btn btn-success"> Update Trainer </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        }}
      </MyCourseConsumer>
    );
  }
}

export default CourseComponent;
