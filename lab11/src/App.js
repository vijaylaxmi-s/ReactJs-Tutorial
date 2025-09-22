import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCourses from './MyCourses';

class App extends Component{

render(){
  return(
    <div className="container">
  <h1 className="text-center">Welcome To JLC!!!</h1>
  <br/>
 <MyCourses />
 </div>    
  );
};
}

export default App;
