import './App.css';
import { Component } from 'react';

class App extends Component {
state  = {
  mycoursesToDisplay:[],
    mystudentsData:[
      {
        studentId: 5001,
        studentName:"Srinivas",
        emailId:"sri@jlc.com",
        phones:{
          office:1111,
          home:12345
        },
        address:{
          city:"Blore", 
          state:"Karnataka"
        },
        courses:[
          {courseId:"C-101", courseName:"Angular", price:15000, trainer:"SD"},
          {courseId:"C-102", courseName:"React", price:14000, trainer:"Sri"},
          {courseId:"C-103", courseName:"MongoDB", price:12000, trainer:"Dande"}

        ]
      },
      {
        studentId: 5003,
        studentName:"Sanjaya ",
        emailId:"Sanjaya@jlc.com",
        phones:{
          office:5555,
          home:78906
        },
        address:{
          city:"Kalburgi", 
          state:"Karnataka"
        },
        courses:[
          {courseId:"C-107", courseName:"Kafka", price:5000, trainer:"SK"},
          {courseId:"C-108", courseName:"security", price:6000, trainer:"SDK"},
          {courseId:"C-109", courseName:"Elasticsearch", price:9000, trainer:"DK Sir"}
         ]
      },
      {
        studentId: 5005,
        studentName:"Srinivas Dande",
        emailId:"sridande@jlc.com",
        phones:{
          office:3333,
          home:54321
        },
        address:{
          city:"Mysore", 
          state:"Karnataka"
        },
        courses:[
          {courseId:"C-104", courseName:"NodeJs", price:10000, trainer:"Srinivas"},
          {courseId:"C-105", courseName:"ExpressJs", price:9000, trainer:"S Dande"},
          {courseId:"C-106", courseName:"Mysql", price:11000, trainer:"Dande Sir"}

        ]
      }
     ]
   };
   
   showCourseInfo= (mysid) =>{
    console.log("Student Id : " , mysid);
    
    // output of filter is array here
   let filteredStudent= this.state.mystudentsData.filter(
    (mystudent) => mystudent.studentId === mysid
  );

   // list of courses belong to student id
  let  mycourseList = filteredStudent[0].courses;

  let tempCoursesToDisplay = mycourseList.map(
    (mycourse) => (
      <tr key={mycourse.courseId}>
        <td>{mycourse.courseId}</td>
        <td>{mycourse.courseName}</td>
        <td>{mycourse.price}</td>
        <td>{mycourse.trainer}</td>
      
      </tr>
    )
  );
 
   let displayCourses= (
    <div>
       <h3>Course Details of Student  : {mysid}</h3>
      <table>
      <thead>
        <tr>
          <th>CID</th>
          <th>CName</th>
          <th>Price</th>
          <th>Trainer</th>
          </tr>
      </thead>
      <tbody>
      {tempCoursesToDisplay}
      </tbody>
    </table>
    </div>
    );
  
  this.setState({
    mycoursesToDisplay: displayCourses,
  }); 
 
  }

  showCourseData = (mystudent) =>{
    console.log("Student Id : " , mystudent.studentId);

   let mycourseList = mystudent.courses;

   let tempCoursesToDisplay = mycourseList.map(
    (mycourse) => (
      <tr key={mycourse.courseId}>
        <td>{mycourse.courseId}</td>
        <td>{mycourse.courseName}</td>
        <td>{mycourse.price}</td>
        <td>{mycourse.trainer}</td>
      
      </tr>
    )
  );
 
   let displayCourses= (
    <div>
       <h3>Course Details of Student  : {mystudent.studentId}</h3>
      <table>
      <thead>
        <tr>
          <th>CID</th>
          <th>CName</th>
          <th>Price</th>
          <th>Trainer</th>
          </tr>
      </thead>
      <tbody>
      {tempCoursesToDisplay}
      </tbody>
    </table>
    </div>
    );
  
  this.setState({
    mycoursesToDisplay: displayCourses,
  }); 

  }

  render() { //overriding
    console.log("I am App Component");

    let mystudentsDataDisplay = this.state.mystudentsData.map(
      (mystudent) => (
        <tr key={mystudent.studentId}>
          <td>{mystudent.studentId}</td>
          <td>{mystudent.studentName}</td>
          <td>{mystudent.emailId}</td>
          <td>{mystudent.phones.office}</td>
          <td>{mystudent.phones.home}</td>
          <td>{mystudent.address.city}</td>
          <td>{mystudent.address.state}</td>
          <td>
            <button onClick={this.showCourseInfo.bind(this, mystudent.studentId)} className='mybutton'>
            Course Info
            </button>
          </td>

          <td>
            <button onClick={this.showCourseData.bind(this, mystudent)} className='mybutton'>
            Course Data
            </button>
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
        <table>
          <thead>
            <tr>
              <th>SID</th>
              <th>SName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Home Phone</th>
              <th>City</th>
              <th>State</th>
              <th></th>
              <th></th>
              </tr>
          </thead>
          <tbody>
            {mystudentsDataDisplay}
          </tbody>
        </table>
      </div>
      <br/> <br/>

      <div className="mydata">
       
       {this.state.mycoursesToDisplay}
      </div>
    
      </div>

    );

  }

}

export default App;
