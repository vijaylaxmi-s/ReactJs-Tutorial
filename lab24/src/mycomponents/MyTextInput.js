import classnames from "classnames";
import propTypes from "prop-types";

const MyTextInput = (props) => {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor={props.myname}>{props.mylable}</label>
        <input
          type={props.mytype}
          name={props.myname}
          className={classnames("form-control form-control-lg", {
            "is-invalid": props.myerror,
            "is-valid": !props.myerror,
          })}
          placeholder={props.myplaceholder}
          value={props.myvalue}
          onChange={props.myonChange}
        />
        <div className="text-danger">{props.myerror}</div>
      </div>
    </div>
  );
};

MyTextInput.propTypes = {
  mylable: propTypes.string.isRequired,
  myname: propTypes.string.isRequired,
  myvalue: propTypes.string.isRequired,
  myonChange: propTypes.func.isRequired,
};

MyTextInput.defaultProps = {
  mytype: "text",
  myplaceholder: "Please Enter The value",
  myerror: "",
};

export default MyTextInput;
