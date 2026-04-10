import React from "react";
import { connect } from 'react-redux'; 

const CourseComponent = (props) => {
const { courseId, courseName, cost, trainer } = props.myCourseData;

return (
    <div className="container">
      <br />{" "}
      <b>
        <u>
          <h2 className="text-left"> Course Info</h2>{" "}
        </u>{" "}
      </b>
      <br />
      <div className = "text-left">
        <h3> Course Id: {courseId}</h3>
        <h3> Course Name : {courseName}</h3>
        <h3> Cost : {cost}</h3>
        <h3> Trainer : {trainer}</h3>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return {
    mycourseData : state.mycourse
  }
}

export default connect(mapStateToProps)(CourseComponent);
