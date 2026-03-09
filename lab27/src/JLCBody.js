import { Component } from "react";
import { Route, Routes } from "react-router-dom";

class JLCBody extends Component {
  render() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<h3>Home Page Here</h3>} />
          <Route path="/courses" element={<h3>Course Page Here</h3>} />
          <Route path="/about" element={<h3>About Page Here</h3>} />
          <Route path="/contact" element={<h3>Contact Page Here</h3>} />
        </Routes>
      </div>
    );
  }
}

export default JLCBody;
