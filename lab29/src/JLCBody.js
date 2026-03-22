import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import MyCourseInfo from "./MyCourseInfo";

class JLCBody extends Component {
  componentDidMount() {
    console.log("JLCBody - DidMount- ", this.props);
  }
  componentWillUnmount() {
    console.log("JLCBody - WillUnmount- ", this.props);
  }

  render() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mycourses/:couId/:couName" element={<MyCourseInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default JLCBody;
