import React, { Component } from "react"; 
import Lead from "./Lead";

class LeadsList extends Component {
  state = {
    myLeadList: [
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
        name: "srinivas",
        email: "srinivas@jlc",
        phone: 99999,
        course: "React",
      },
    ],
  };

  deleteLead = (leadId) => {
    console.log("LeadsList -deleteLead() ");
    const { myLeadList } = this.state;
    console.log(myLeadList);
    const myLeads = myLeadList.filter((mylead) => mylead.leadId !== leadId);
    this.setState({ myLeadList: myLeads });
  };

  render() {
    return (
      <div>
        {this.state.myLeadList.map(mylead => (          
          <Lead
            key={mylead.leadId}
            lead={mylead}
            deleteClickHandler={this.deleteLead.bind(this, mylead.leadId)}
          />
        ))}
      </div>
    );
  }
}

export default LeadsList;
