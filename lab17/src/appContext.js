import React, { Component } from "react";

const myContext = React.createContext();

const myreducer = (state, action) => {
  console.log("[appContent] - myreducer", action.type);
  switch (action.type) {
    case "DELETE_LEAD":
      return {
        myLead: state.myLeadList.filter(
          (mylead) => mylead.leadId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class MyApplicationData extends Component {
  state = {
    myleadsList: [
      {
        leadId: 101,
        name: "Sri",
        email: "sri@jlc",
        phone: 12345,
        course: "Java FSD",
      },
      {
        leadId: 102,
        name: "vas",
        email: "vas@jlc",
        phone: 55555,
        course: "Angular",
      },
      {
        leadId: 103,
        name: "sd",
        email: "sd@jlc",
        phone: 99999,
        course: "React",
      },
      {
        leadId: 104,
        name: "ds",
        email: "ds@jlc",
        phone: 99999,
        course: "React",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => myreducer(state, action));
    },
  };

  render() {
    return (
      <myContext.Provider value={this.state}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}

export const MyDataConsumer = myContext.Consumer;
