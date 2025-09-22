import React, { Component } from "react";

//1. create context
const courseInfoContext = React.createContext(null);

export class MyCourseProvider extends Component {
  state = {
    // define state
    courseId: "C-11",
    courseName: "Spring MicroServices",
    cost: 18000,
    trainer: "Srinivas Dande",
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
