import { Component } from "react";
import PropTypes from "prop-types";
import { MyDataConsumer } from "../appContext";

class Lead extends Component {
  state = {
    showLeadInfo: false,
  };

  onShowClick = () => {
    this.setState({
      showLeadInfo: !this.state.showLeadInfo,
    });
  };

  onDeleteClick = (myleadId, dispatch) => {
    console.log("Lead - onDeleteClick()");
    dispatch({ type: "DELETE_LEAD", payload: myleadId });
  };

  render() {
    const { lead } = this.props;
    let myleadInfo = null;
    if (this.state.showLeadInfo) {
      myleadInfo = (
        <ul className="list-group">
          <li className="list-group-item">Email: {lead.email}</li>
          <li className="list-group-item">Phone: {lead.phone}</li>
        </ul>
      );
    }

    return (
      <MyDataConsumer>
        {(value) => {
          const { dispatch } = value;
          const { lead } = this.props;
          return (
            <div className="card card-body mb-3">
              <h4>
                {lead.name} - Intrested for {lead.course}
                <i
                  onClick={this.onShowClick}
                  className="fa-solid fa-sort-down"
                  style={{
                    cursor: "pointer",
                    color: "green",
                    fontSize: "35px",
                  }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, lead.leadId, dispatch)}
                  className="fa-solid fa-circle-xmark"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                />
              </h4>
              {myleadInfo}
            </div>
          );
        }}
      </MyDataConsumer>
    );
  }
}

Lead.propTypes = {
  lead: PropTypes.object.isRequired,
};

export default Lead;
