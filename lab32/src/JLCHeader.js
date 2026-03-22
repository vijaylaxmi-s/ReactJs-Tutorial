import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const JLCHeader = () => {
  return (
    <div className="card-header">
      <h1 className="text-center">Welcome to CourseCube!!!</h1>

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default JLCHeader;
