import './App.css';
import { Component } from 'react';
import Student from './student/Student';

class App extends Component {

  state  = {
    myheader : "Welcome to Java Learning Center",
    student:{
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
  }

  render() { //overriding
    console.log("I am App Component");
    return (
      <div className="myheader">
      <p>{this.state.myheader}</p>
      <br/>
        <Student mystudent = {this.state.student}/>
      </div>
    );
  }
 
}

export default App;
