import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from "./Hello";

class App extends Component{
constructor(props){
  super(props);
  console.log("[App] - constructor()");
  this.state = {
    companyName :"Java Learning Center",
  }
}

render(){
  console.log(1,"[App] - render()");
  console.log(2,"[App] - ", App.disPlayName);
  console.log(3,"[App] - ", App.defaultProps);
  console.log(4,"[App] - ", this.state);
  console.log(5,"[App] - ", this.props);


  return(
    <div className="container">
  <h1 className="text-center">Welcome To JLC!!!</h1>
  <br/>
  
  <Hello/>
  <Hello  myTrainer="free"/>
  <Hello  myTrainer="sri" mycolor="pink"/>
 </div>    
  );
};
}

export default App;
