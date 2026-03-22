import propTypes from "prop-types"; 

const MyTextInput = ({
  mylabel,
  mytype = "text",          
  myname,
  myplaceholder = "",      
  myvalue,
  myOnChange,}) => {

  return (
    <div className="form-group">
      <h3>
        <label> {mylabel} </label>
      </h3>
      <input
        type={mytype}
        name={myname}
        className="form-control form-control-lg"
        placeholder={myplaceholder}
        value={myvalue}
        onChange={myOnChange}
      />
    </div>
  );
};

MyTextInput.propTypes = {
  mylabel: propTypes.string.isRequired,
  myname: propTypes.string.isRequired,
  myvalue: propTypes.string.isRequired,
  myOnChange: propTypes.func.isRequired,
};

export default MyTextInput;
