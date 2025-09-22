import { Component } from "react";
import './Student.css'
import Course from "../course/Course";

class Student extends Component {
   state = {
    sid: 101,
    sname:"Srinivas",
    email:"sri@jlc.com",
    phone: 12345,
    city: "Blore",
    course:{
      courseId: "C-12",
      courseName : "React 16",
      price: 15000,
      trainer:"SD",
    }
   }

    render() {
    console.log("render() - Student Component");    
     return(
      <div className = "mystudent">
      <p> Sid : {this.state.sid}</p>
      <p> Sname : {this.state.sname}</p>
      <p> Email : {this.state.email}</p>
      <p> phone : {this.state.phone}</p>
      <p> City : {this.state.city }</p>
      <Course mycid=    {this.state.course.courseId} 
              mycname={this.state.course.courseName}
              myprice={this.state.course.price}
              mytrainer={this.state.course.trainer} 
              hello="Hello Guys"
              />
  </div> 
   );
   }
}

export default Student;