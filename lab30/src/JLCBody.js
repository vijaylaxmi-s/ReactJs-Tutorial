import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
const MyCourses = React.lazy(() => import("./Courses"));

const JLCBody = () => {
  return (
    <div className="container">
      <Routes>
        <Route
          path="/courses"
          element={
            <Suspense fallback={<div>Loading...</div>}>
             <MyCourses />
            </Suspense>
          }
        />
        <Route path="/" element={<Login />} />
        {/* Redirect /login → / */}
        <Route path="/login" element={<Navigate to="/" replace />} />
        {/* Catch all routes → redirect to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default JLCBody;
