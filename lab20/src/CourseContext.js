import React, { Component } from "react";
import { UPDATE_CNAME, UPDATE_PRICE } from "./courseTypes";
import { UPDATE_DURATION, UPDATE_TRAINER } from "./courseTypes";

//1. create context
const courseInfoContext = React.createContext(null);

//3.
const myreducer = (state, action) => {
  console.log("c", "[coursecontext]", action.type, action.payload);
  switch (action.type) {
    case UPDATE_CNAME:
      return {
        courseName: action.payload,
      };
    case UPDATE_PRICE:
      return {
        price: action.payload,
      };
    case UPDATE_DURATION:
      return {
        duration: action.payload,
      };
    case UPDATE_TRAINER:
      return {
        trainer: action.payload,
      };
    default:
      return state;
  }
};

export class MyCourseProvider extends Component {
  state = {
    //2. define state properties and diapatch function
    courseId: " C-101",
    courseName: " Master React",
    price: 18000,
    duration: " 50 Hrs",
    trainer: " Srinivas Dande",
    mydispatch: (action) => {
      console.log("B", "CourseContext- mydispatch");

      this.setState((state) => myreducer(this.state, action));
    },
  };

  render() {
    //3, specify the provider
    return (
      <courseInfoContext.Provider value={this.state}>
        {this.props.children}
      </courseInfoContext.Provider>
    );
  }
}

//4, export the consumer
export const MyCourseConsumer = courseInfoContext.Consumer;
