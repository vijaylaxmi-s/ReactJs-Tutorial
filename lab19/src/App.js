import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyStudentProvider } from "./StudentContext";
import StudentComponent from "./StudentComponent";
import { MyCourseProvider } from "./CourseContext";
import CourseComponent from "./CourseComponent";
import TestComponent from "./TestComponent ";

class App extends Component {
  render() {
    return (
      <MyStudentProvider>
        <MyCourseProvider>
          <div className=" container">
            <StudentComponent />
            <CourseComponent />
            <TestComponent />
          </div>
        </MyCourseProvider>
      </MyStudentProvider>
    );
  }
}

export default App;
