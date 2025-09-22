import { Component } from "react";
import './Student.css'
import Course from "../course/Course";

class Student extends Component {
   state = {
    sid: 101,
    sname:"Srinivas",
    email:"sri@jlc.com",
    phone: 12345,
    city: "Blore"
   }
    render() {
    console.log("I am a Student");
    return(
        <div className = "mystudent">
            <p> Sid : {this.state.sid}</p>
            <p> Sname : {this.state.sname}</p>
            <p> Email : {this.state.email}</p>
            <p> phone : {this.state.phone}</p>
            <p> City : {this.state.city }</p>
            <br/>
            <Course />
        </div>
    );
    }
}

export default Student;