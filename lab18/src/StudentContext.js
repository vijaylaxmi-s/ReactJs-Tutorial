import React, { Component } from "react";

//1. create context
const studentInfoContext = React.createContext(null);

export class MyStudentProvider extends Component {
  state = {
    // define state
    studentId: 101,
    studentName: "Dandes",
    email: "dandes@jlc.com",
    phone: 55555,
  };

  render() {
    //3, specify the provider
    return (
      <studentInfoContext.Provider value={this.state}>
        {this.props.children}
      </studentInfoContext.Provider>
    );
  }
}

//4, export the consumer
export const MyStudentConsumer = studentInfoContext.Consumer;
