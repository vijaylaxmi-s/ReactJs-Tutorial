import { Component } from "react";
import PropTypes from "prop-types";

class Lead extends Component {
  state = {
    showLeadInfo: false,
  };

  onShowClick = () => {
    this.setState({
      showLeadInfo: !this.state.showLeadInfo,
    });
  };

  onDeleteClick = () => {
    console.log("Lead -onDeleteClic");
    this.props.deleteClickHandler();
  };

  render() {
    const { lead } = this.props;
    let myleadInfo = null;
    if (this.state.showLeadInfo) {
      myleadInfo = (
        <ul>
          <li className="list-group-item">Email: {lead.email}</li>
          <li className="list-group-item">Phone: {lead.phone}</li>
        </ul>
      );
    }

    return (
      <div className="card card-body mb-4">
        <h4>
          {lead.name} - Intrested for {lead.course}
          <i
            onClick={this.onShowClick}
            className="fa-solid fa-sort-down"
            style={{ cursor: "pointer", color: "green" }}
          />
          <i
            onClick={this.onDeleteClick}
            className="fa-solid fa-circle-xmark"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
        </h4>
        {myleadInfo}
      </div>
    );
  }
}

Lead.propTypes = {
  lead: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Lead;
