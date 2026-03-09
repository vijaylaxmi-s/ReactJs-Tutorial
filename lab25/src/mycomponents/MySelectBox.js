import propTypes from "prop-types";

const MySelectBox = (props) => {
  return (
    <div className="form-group">
      <h3>
        <label>{props.mylable}</label>
      
      <select className="form-control form-control-lg"
        name={props.myname}
        onChange={props.myOnChange}>
          {props.myoptions.map((myoption, myindex) => {
            return(
              <option key={myindex} value={myoption}>
                {myoption}
              </option>
              );
          })}
      </select>
      </h3>
    </div>
  );
};

MySelectBox.propTypes = {
  mylable: propTypes.string.isRequired,
  myname: propTypes.string.isRequired,
  myoptions: propTypes.array.isRequired,
  myOnChange: propTypes.func.isRequired,
};

export default MySelectBox;
