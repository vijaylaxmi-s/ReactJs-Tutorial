import propTypes from 'prop-types';

const MyTextInput = (props) => {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor={props.myname}>{props.mylable}</label>
        <input
          type={props.mytype}
          name={props.myname}
          className="form-control form-control-lg"
          placeholder={props.myplaceholder}
          value={props.myvalue}
          onChange={props.myOnChange}
        />
      </div>
    </div>
  );
};

MyTextInput.propTypes = {
  mylable: propTypes.string.isRequired,
  myname: propTypes.string.isRequired,
  myvalue: propTypes.string.isRequired,
  myOnChange: propTypes.func.isRequired,
};

MyTextInput.defaultProps = {
  mytype: "text",
};

export default MyTextInput;
