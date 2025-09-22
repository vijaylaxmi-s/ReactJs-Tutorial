import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCourses from './MyCourses'

const App = () => {
  return(
    <div className="container">
  <h1 className="text-center">Welcome To JLC!!!</h1>
  <br/>
 <MyCourses />
 </div>    
  );
}

export default App;
