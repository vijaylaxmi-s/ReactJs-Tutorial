import { Link } from "react-router-dom";

const JLCHeader = () => {
  return (
    <div className="container text-center">
      <h1> Welcome to CourseCube!!!</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            {" "}
            Home{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default JLCHeader;
