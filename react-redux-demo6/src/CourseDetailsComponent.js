import { useEffect } from "react";
import { fetchOneCourse } from "./courseActions";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

const CourseDetailsComponent = ({ mycourseData, courseDispatch }) => {
  const { id } = useParams();
  
  useEffect(() => {
    courseDispatch(fetchOneCourse(id));
  }, [id, courseDispatch]);

  let messageToDisplay = null;
  if (mycourseData.loadingStatus) {
    messageToDisplay = "Loading .....Please Wait....";
  } else if (mycourseData.error) {
    messageToDisplay = mycourseData.error.message;
  }

  let courseDetails = null;
  if (mycourseData && mycourseData.oneCourse) {
    courseDetails = mycourseData.oneCourse;
  }

  return (
    <div className="container">
      <h2 className="text-center"> {messageToDisplay} </h2>

      <table className="table">
        <tbody>
          <tr>
            <td> Course Id </td>
            <td> {courseDetails.id} </td>
            <td> CourseName </td>
            <td> {courseDetails.courseName} </td>
          </tr>
          <tr>
            <td> Trainer </td>
            <td> {courseDetails.trainer} </td>
            <td> Duration </td>
            <td> {courseDetails.duration} </td>
          </tr>
          <tr>
            <td> Enrollments </td>
            <td> {courseDetails.enrollments} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    mycourseData: state.mycourse,
  };
};

const mapDispatch = (dispatch) => {
  return {
    courseDispatch: dispatch,
  };
};

export default connect(mapState, mapDispatch)(CourseDetailsComponent);
