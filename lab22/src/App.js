import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Welcome to Java Learning Center</h2>
        </div>
        <div className="card-body">
          {/* <LoginForm /> */}
          <LoginForm username="abc" password="123" />
        </div>
      </div>
    );
  }
}

export default App;
