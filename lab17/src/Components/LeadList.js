import React, { Component } from "react";
import { MyDataConsumer } from "../appContext";
import Lead from "./Lead";

class LeadsList extends Component {
  render() {
    return (
      <MyDataConsumer>
        {(value) => {
          const { myLeadsList } = value || {};
          return (
            <div>
              {(Array.isArray(myLeadsList) ? myLeadsList : []).map((mylead) => (
                <Lead key={mylead.leadId} lead={mylead} />
              ))}
            </div>
          );
        }}
      </MyDataConsumer>
    );
  }
}

export default LeadsList;
