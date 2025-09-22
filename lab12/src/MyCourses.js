import React, {useState} from "react";

const Mycourses = () => {
   // const [state, setState] = useState(initialState); 
   //1.Using the useState() React Hook 
    const[courseState, setCourseState]= useState(
 {
  trainerName:"Srinivas Dande", 
  trainerEmail:"sri@jlc.com", 
  mycourseList : [ 
  {cid:101,cname:"Angular 7",price:15000,active:true}, 
  {cid:102,cname:"React 16",price:15000,active:true}, 
  {cid:103,cname:"Java FSD",price:35000,active:false}, 
  {cid:104,cname:"MicroServices",price:25000,active:true}, 
  {cid:105,cname:"DevOps",price:15000,active:false}, 
  ] 
  } 
  ); 
   

  const showActiveCourse = () =>{
    console.log("showActiveCourses - called"); 
 
    let activeCourses = courseState.mycourseList.filter(mycourse => mycourse.active=== true); 
    // 3 properties 
     //useState() replaces the new State with Current State 
  // 2 properties 
 setCourseState({ 
  trainerEmail:"srinivas@jlc.com", 
  mycourseList : activeCourses 
  }); 
 
  }

  const showAllCourses = ()=> { 
    console.log("showAllCourses - called"); 
    let allCourses = [ 
    {cid:101,cname:"Angular 7",price:15000,active:true}, 
    {cid:102,cname:"React 16",price:15000,active:true}, 
    {cid:103,cname:"Java FSD",price:35000,active:false}, 
    {cid:104,cname:"MicroServices",price:25000,active:true}, 
    {cid:105,cname:"DevOps",price:15000,active:false}, 
    ]; 
    // 3 properties 
     //useState() Hook replaces the new State with Current State 
    // 2 properties 
    setCourseState({ 
    trainerName:"Srinivas Dande", 
    trainerEmail:"sri@jlc.com", 
    mycourseList : allCourses 
    }); 
   
    } 

    let courseListToDisplay = courseState.mycourseList.map(
    (mycourse) => (
      <tr>
  <td> <h6> {mycourse.cid} </h6></td> 
 <td> <h6> {mycourse.cname} </h6></td> 
 <td> <h6> {mycourse.price} </h6></td> 
 <td> <h6> {mycourse.active} </h6></td> 
</tr>
    )
    );
    let trainerInfo = null; 
    if(courseState.trainerName){ 
    trainerInfo = ( <h3> Trainer name : {courseState.trainerName} </h3>); 
    } 
    
    return (
 
      <div className="container"> 
      <div className="container"> 
     <button onClick={showAllCourses} className="btn btn-success mybutton btn-lg"> 
     All Courses </button> 
     <button onClick={showActiveCourse} className="btn btn-success mybutton btn-Ig"> Active Courses </button> 
      </div> 
     <br/> <br/> 
     <table> 
     <thead> 
     <tr> <th> Course ID</th> 
     <th> Course Name</th> 
     <th> Price</th> 
     <th> Is Active</th> </tr> 
     </thead> 
     <tbody> {courseListToDisplay} </tbody> 
     </table> 
      { trainerInfo } 
     <h3> Trainer Email : {courseState.trainerEmail} </h3> 
      </div> 
      )
}

export default Mycourses;