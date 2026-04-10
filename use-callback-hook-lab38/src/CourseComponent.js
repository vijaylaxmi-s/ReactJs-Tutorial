import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const CourseComponent = (props) => {
  console.log(props.courseName, "[CourseComponent]-Rendered");
  return (
    <div className="container">
      <h3>
        {props.courseName} - {props.price}
      </h3>
    </div>
  );
};

export default React.memo(CourseComponent);
