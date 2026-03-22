import { Component } from "react";
import {Link } from "react-router-dom";

class CourseList extends Component {
  state = {
    courseInfo: [
      { courseId: 101, courseName: "React Course" },
      { courseId: 102, courseName: "Angular Course" },
      { courseId: 103, courseName: "Spring Boot Course" },
      { courseId: 104, courseName: "MicroServices Course" },
      { courseId: 105, courseName: "Java Full Stack Course" },
    ],
  };
  componentDidMount() {
    console.log("CourseList - DidMount- ", this.props);
  }
  componentWillUnmount() {
    console.log("CourseList - WillUnmount- ", this.props);
  }

  render() {
    const mycourses= this.state.courseInfo.map((mycourse) => {
      return (
        <Link
          to={"/mycourses/" + mycourse.courseId + "/" + mycourse.courseName}
          key={mycourse.courseId}
        >
          {" "}
          {mycourse.courseName} <br />
        </Link>
      );
    });

    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Course List </h1>
          <p className="lead">{mycourses}</p>
        </div>
      </div>
    );
  }
}

export default CourseList;
