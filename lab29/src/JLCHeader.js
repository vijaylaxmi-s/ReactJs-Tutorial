import { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class JLCHeader extends Component {
  componentDidMount() {
    console.log("JLCHeader - DidMount- ", this.props);
  }

  componentWillUnmount() {
    console.log("JLCHeader - WillUnmount- ", this.props);
  }

  render() {
    return (
      <div className="card">
        <h3>Welcome to Course Cube!!!</h3>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <h4>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link myactive" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </h4>
          </li>

          <li className="nav-item">
            <h4>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link myactive" : "nav-link"
                }
                to={{
                  pathname: "/courses",
                  hash: "#Hello",
                  search: "?name=JLC",
                }}
              >
                Courses
              </NavLink>
            </h4>
          </li>

          <li className="nav-item">
            <h4>
              {" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link myactive" : "nav-link"
                }
                to="/about"
              >
                {" "}
                About US
              </NavLink>
            </h4>
          </li>

          <li className="nav-item">
            <h4>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link myactive" : "nav-link"
                }
                to="/contact"
              >
                Contact US
              </NavLink>
            </h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default JLCHeader;
