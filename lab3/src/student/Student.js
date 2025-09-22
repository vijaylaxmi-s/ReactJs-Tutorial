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
    showStudent: false
   }


   showStudentInfo = () => {
   console.log("button is clciked")
   let studentFlag= this.state.showStudent;
   this.setState({
    showStudent: ! studentFlag
   });
   }
 
    render() {
    console.log("render() - Student Component");
     let myStudenetInfo = null;
     if(this.state.showStudent === true){
        myStudenetInfo = (
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

            return(
               <div>
                  <button  className="mybutton" onClick={this.showStudentInfo}>Student Info</button>
                  {myStudenetInfo}
               </div>
            );
     }
     
  


    return(
       <div>
        <button className="mybutton" onClick={this.showStudentInfo}>Student Info</button>
        {myStudenetInfo}
       </div> 
    );
    }
}

export default Student;