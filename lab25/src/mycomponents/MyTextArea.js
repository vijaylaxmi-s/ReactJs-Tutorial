import propTypes from 'prop-types';

const MyTextArea = (props) => {
  return (
      <div className="form-group">
        <h3>
        <label>{props.mylable}</label>
           </h3>
       <textarea 
       value={props.myvalue}
       onChange={props.myOnChange}
       placeholder={props.myplaceholder}
       rows={props.myrows}
       cols={props.mycols}
       className='form-control form-control-lg'
       />
      </div>
   
  );
};

MyTextArea.propTypes = {
  mylable: propTypes.string.isRequired,
  myvalue: propTypes.string.isRequired,
  myOnChange: propTypes.func.isRequired,
};

MyTextArea.defaultProps = {
  myplaceholder: "",
  myrows:5,
  mycols:25

};

export default MyTextArea;
