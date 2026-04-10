import { Route, Routes } from "react-router-dom";
import CourseListComponent from "./CourseListComponent";
import CourseDetailsComponent from "./CourseDetailsComponent";


const JLCBody = () =>{
    return(
        <div className="card">
            <Routes>
                <Route path="/" element={<CourseListComponent />} />
                <Route path="/courses/:id" element={<CourseDetailsComponent />} />
            </Routes>

        </div>

    );
}

export default JLCBody;