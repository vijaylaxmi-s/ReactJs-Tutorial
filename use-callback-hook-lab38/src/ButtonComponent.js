import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const ButtonComponent = (props) => {
  console.log(props.courseName, "[ButtonComponent]-Rendered");
  return (
    <div className="container">
      <button onClick={props.clickHandler} className="bg-success">
        {props.children}
      </button>
    </div>
  );
};

export default React.memo(ButtonComponent);
