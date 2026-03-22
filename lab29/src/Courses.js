import {useEffect } from "react";
import CourseList from "./CourseList";
import { useLocation, useParams } from "react-router-dom";

const Courses = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    console.log("Courses - Mounted-");
    console.log("1, ", location.hash);
    console.log("2, ", location.pathname);
    console.log("3. ", location.search);
    console.log("4. Params ", params);

    return () => {
      console.log("Courses - Unmounted-");
    };
  }, [location, params]);

  return <CourseList />;
};

export default Courses;
