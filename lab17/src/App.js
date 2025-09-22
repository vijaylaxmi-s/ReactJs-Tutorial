import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import LeadsList from "./Components/LeadList";
import { MyApplicationData } from "./appContext";

class App extends Component {
  render() {
    return (
      <MyApplicationData>
        <div className="App Container">
          <Header mybrand="Lead Manager"></Header>
          <LeadsList />
        </div>
      </MyApplicationData>
    );
  }
}

export default App;
