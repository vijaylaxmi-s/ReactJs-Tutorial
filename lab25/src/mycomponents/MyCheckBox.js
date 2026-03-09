import propTypes from "prop-types";

const MyCheckBox = (props) => {
  return (
    <span>
      <h3>
        <input
          type={props.mytype}
          checked={props.mychecked}
          value={props.myvalue}
          onChange={props.myOnChange}
          className="form-check-input"
        />{" "}
        <label>{props.mylabel}</label>
      </h3>
    </span>
  );
};

MyCheckBox.propTypes = {
  mylable: propTypes.string.isRequired,
  myvalue: propTypes.string.isRequired,
  mychecked: propTypes.bool.isRequired,
  myOnChange: propTypes.func.isRequired,
};

MyCheckBox.defaultProps = {
  mytype: "checkbox",
};

export default MyCheckBox;
