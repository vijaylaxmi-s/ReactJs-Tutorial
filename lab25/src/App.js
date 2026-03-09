import { Component } from "react";
import TextInputDemo from "./mydemos/TextInputDemo";
import TextAreaDemo from "./mydemos/TextAreaDemo";
import SelectBoxDemo from "./mydemos/SelectBoxDemo";
import RadioButtonDemo from "./mydemos/RadioButtonDemo";
import CheckBoxDemo from "./mydemos/CheckBoxDemo";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Welcome to Java Learning Center</h2>
        </div>
        <div className="card-body">
          <TextInputDemo />
          <TextAreaDemo />
          <SelectBoxDemo />
          <RadioButtonDemo />
          <CheckBoxDemo />
        </div>
      </div>
    );
  }
}

export default App;
