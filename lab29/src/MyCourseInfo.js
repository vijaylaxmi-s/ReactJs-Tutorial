import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const MyCourseInfo = () => {
  const { couName, couId } = useParams();

  useEffect(() => {
    console.log("MyCourseInfo - Mounted");
    console.log("Params:", { couId, couName });

    return () => {
      console.log("MyCourseInfo - Unmounting");
    };
  }, [couName, couId]);

  return (
    <div className="card">
      <div className="container">
        <h1 className="display-4">Info about {couName} </h1>
        <h3 className="card-body">
          Course Id : {couId} <br />
          MyCourse Info Here <br />
          MyCourse Info Here <br />
          MyCourse Info Here <br />
          MyCourse Info Here <br />
        </h3>
        <br />
        <NavLink className="nav-link" to="/courses">
          <a href="/">
            <h2>Courses</h2>{" "}
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default MyCourseInfo;
