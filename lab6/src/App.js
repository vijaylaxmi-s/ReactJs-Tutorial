import './App.css';
import { Component } from 'react';

class App extends Component {

   
   showMoreInfo = (mycid, mycname) => {
    console.log("Course Id selected is ", mycid);
    console.log("Course Name is ", mycname);
  }

  state  = {
    sid: 101,
    sname:"Srinivas",
    email:"sri@jlc.com",
    dob: Date(),
    isActive: false,
    mycourse:{
      courseId: "C-12",
      courseName : "React 16",
      price: 15000,
      trainer:"SD",
      isOnline: true
    },
    mycourseNames:["React", "Angular", "Mongo","NodeJs","ExpressJs"],
    mycourseList:[
      {courseId:"C-101", courseName:"Angular", price:15000, trainer:"SD"},
      {courseId:"C-102", courseName:"React", price:14000, trainer:"Sri"},
      {courseId:"C-103", courseName:"MongoDB", price:12000, trainer:"Dande"},
      {courseId:"C-104", courseName:"NodeJs", price:10000, trainer:"Srinivas"},
      {courseId:"C-105", courseName:"ExpressJs", price:9000, trainer:"S Dande"},
   ]
  }

  render() { //overriding
    console.log("I am App Component");

    let mycourseNamesDisplay = this.state.mycourseNames.map(
      (courseName, myindex) => (
      <li key={myindex}>{courseName} </li>
    )
    );

    let mycourseListDisplay = this.state.mycourseList.map(
      (mycourse) => (
        <tr key={mycourse.courseId}>
          <td>{mycourse.courseId}</td>
          <td>{mycourse.courseName}</td>
          <td>{mycourse.price}</td>
          <td>{mycourse.trainer}</td>
          <td>
            <button onClick={this.showMoreInfo.bind(this, mycourse.courseId , mycourse.courseName)} className="mybutton">More Info</button>
          </td>
        </tr>
      )
    );
    return (
      <div>
       <div className="myheader">
      <p>Welcome to Java Learning Center</p>
      </div>

      <div className="mydata">
        <h3><u>1.Simple Type of Properties</u></h3>
      <p>Sid:{this.state.sid}</p>
      <p>Sname:{this.state.sname}</p>
      <p>Email:{this.state.email}</p>
      <p>Dob:{this.state.dob}</p>
      <p>Active:{this.state.isActive?"YES":"NO"}</p>
      </div>

      <div className="mydata">
      <h3><u>2.Object Type of Properties</u></h3>
      <p>Course Id:{this.state.mycourse.courseId}</p>
      <p>Course Name:{this.state.mycourse.courseName}</p>
      <p>Price:{this.state.mycourse.price}</p>
      <p>Trainer:{this.state.mycourse.trainer}</p>
      <p>Online:{this.state.mycourse.isOnline?"YES":"NO"}</p>
      </div>

      <div className="mydata">
      <h3><u>3.Array of Simple Types</u></h3>
       <ul>
        {mycourseNamesDisplay}
       </ul>
      </div>
    
      <div className="mydata">
      <h3><u>3.Array of Object Types</u></h3>
       <table>
        <thead>
        <tr>
          <th>Course Id</th>
          <th>Course Name</th>
          <th>Course Price</th>
          <th>Trainer</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
        {mycourseListDisplay }
       </tbody>
       </table>
      </div>

      </div>

    );

  }


}



export default App;
