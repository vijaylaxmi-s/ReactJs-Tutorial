import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCourses } from "./courseActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const CourseListComponent = ({ mycourseData, courseDispatch }) => {
  useEffect(() => {
    courseDispatch(fetchAllCourses());
  }, []);

  let messageToDisplay = null;
  if (mycourseData.loadingStatus) {
    messageToDisplay = "Loading .....Please Wait.... ";
  } else if (mycourseData.error) {
    messageToDisplay = mycourseData.error.message;
  }

  let coursesToDislay = null;
  if (mycourseData && mycourseData.courseList) {
    coursesToDislay = mycourseData.courseList;
  }

  const mycourseList = coursesToDislay.map((mycourse) => {
    return (
      <tr key={mycourse.id}>
        <td> {mycourse.id} </td>
        <td> {mycourse.courseName} </td>
        <td> {mycourse.duration} </td>
        <td> {mycourse.trainer} </td>
        <td> {mycourse.enrollments} </td>
        <td>
          <Link className="btn btn-success" to={"/courses/" + mycourse.id}>View Details</Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th> Course ID</th>
            <th> Course Name</th>
            <th> Duration</th>
            <th> Trainer</th>
            <th> Enrollments</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{mycourseList}</tbody>
      </table>
      <h2 className="text-center"> {messageToDisplay} </h2>
    </div>
  );
};

const mapState = (state) => {
  return {
    mycourseData: state.mycourses,
  };
};

const mapDispatch = (dipatch) => {
  return {
    courseDispatch: dipatch,
  };
};

export default connect(mapState, mapDispatch)(CourseListComponent);
