import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./AddBook";

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Welcome to Java Learning Center</h2>
        </div>
        <div className="card-body">
          <AddBook />
        </div>
      </div>
    );
  }
}

export default App;
