import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./JLCHeader";
import JLCBody from "./JLCBody";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="card">
         <JLCHeader />
         <JLCBody />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
