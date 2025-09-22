import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from "./Hello";
import Hai from "./Hai";
import Mycourse from "./MyCourse";

class App extends Component{

constructor(props){
  super(props);
  console.log("[App] - constructor()");
  this.state = {
    companyName :"CourseCube",
    courseFlag:true,
    errorFlag:false

  }
}


static getDerivedStateFromProps(myprops, mystate){
  console.log("[App] - getDerivedStateFromProps()");
  return null;
}

componentDidMount() {
  console.log("[App] - componentDidMount()");

}

shouldComponentUpdate(nextProps, nextState){
  console.log("[App] - shouldComponentUpdate()");
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log("[App] - getSnapshotBeforeUpdate()");
  return null;

}

 componentDidUpdate(prevProps, prevState, mysnapshot) { 
 console.log("[App] - componentDidUpdate"); 
 //console.log("[App] -", mysnapshot); 
 } 

componentWillMount() {
    console.log("[App] - componentWillMount()");
}

static getDerivedStateFromError(error) { 
 console.log("[App] - getDerivedStateFromError", error); 
 return { hasError: true }; 
 } 
 
 componentDidCatch(error, info) { 
 console.log("[App] - componentDidCatch", error); 
 console.log("[App] - componentDidCatch", info.componentStack); 
 this.state.errorFlag = true;
 } 

showHidenCourses = ()=> {
 let myCourseFlag = this.state.courseFlag;
 this.setState({
  courseFlag : !myCourseFlag
 });
}

static getDerivedStateFromProps(myprops , mystate){
  console.log("[App] - getDerivedStateFromProps()");
  return null;
}

render(){
  console.log("[App] - render()");
  if(this.state.errorFlag == true){
    return (<h1>OOPS </h1>);
  } else {
  let displayCourse = null;
  if(this.state.courseFlag === true){
    displayCourse = (
      <Mycourse 
        hello = "Hello Guys"
        hai = "Hai Guys" />
    )
  }


  return(
  <div className="container">
  <h1 className="text-center">Welcome To {this.state.companyName}!!!</h1>
  <br/>
  <button className="btn btn-danger" onClick={this.showHidenCourses}> Show Hiden Courses</button>
  <br/>
  {displayCourse}
  <br/>
  <table className="table boarded">
    <tbody>
      <tr>
        <td><Hello mytrainer="Dande"/></td>
        <td><Hai mycolor="Blue"/></td>

      </tr>
    </tbody>

  </table>


 </div>    
  );
};
}
}

export default App;
