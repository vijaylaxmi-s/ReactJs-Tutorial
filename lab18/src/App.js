import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyStudentProvider } from "./StudentContext";
import StudentComponent from "./StudentComponent";
import StudentComponent1 from "./StudentComponent1";

class App extends Component {
  render() {
    return (
      <MyStudentProvider>
        <div className=" container">
          <StudentComponent />
          <StudentComponent1 />
        </div>
      </MyStudentProvider>
    );
  }
}

export default App;
