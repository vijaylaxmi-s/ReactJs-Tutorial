import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import LeadsList from "./Components/LeadList";

class App extends Component {
  render() {
    return (
      <div className="App Container">
        <Header mybrand="Lead Manager"></Header>
        <LeadsList/>
      </div>
    );
  }
}

export default App;
