import { Component } from "react";

class mycourses extends Component{
    state = {
        trainerName:"SD",
        trainerEmail:"SD@gmail.com",
        mycourseList:[
            {
              cid: 101,
              cname: "Angular 7",
              price:"15000",
              active:true
            },
            {
              cid: 102,
              cname: "React Js 16",
              price:"15000",
              active:true
            },
            {
              cid: 103,
              cname: "Java FSD",
              price:"35000",
              active:false
            },
            {
              cid:104,
              cname:"MicroServices",
              price:25000,
              active:true
            }, 
            {
              cid:105,
              cname:"DevOps",
              price:15000,
              active:false
            }, 
          ]
    };

     showActiveCourse = () =>{
      console.log("showActiveCourses - called"); 

      let activeCourses = this.state.mycourseList.filter(mycourse => mycourse.active === true);

       //setState() merges the new State with Current State 
      // 3 properties
      this.setState({
        trainerEmail:"srinivas@jlc.com", 
        mycourseList : activeCourses
      })
    }
    
     showAllCourses = ()=> { 
      console.log("showAllCourses - called"); 
      let allCourses = [ 
      {cid:101,cname:"Angular 7",price:15000,active:true}, 
      {cid:102,cname:"React 16",price:15000,active:true}, 
      {cid:103,cname:"Java FSD",price:35000,active:false}, 
      {cid:104,cname:"MicroServices",price:25000,active:true}, 
      {cid:105,cname:"DevOps",price:15000,active:false}, 
      ]; 
      // 3 properties 
      this.setState({ 
      trainerName:"Srinivas Dande", 
      trainerEmail:"sri@jlc.com", 
      mycourseList : allCourses 
      }); 
      //useState() Hook replaces the new State with Current State 
      // 2 properties 
      } 


    render() {
      let courseListToDisplay = this.state.mycourseList.map(
        (mycourse) => (
         <tr> 
<td> <h6> {mycourse.cid} </h6></td> 
<td> <h6> {mycourse.cname} </h6></td> 
<td> <h6> {mycourse.price} </h6></td> 
<td> <h6> {mycourse.active} </h6></td> 
</tr> 

        )
      );
        return(
          <div className="container">
          <div className="container">
<button onClick={this.showAllCourses} className="btn btn-success mybutton btn-lg"> 
All Courses 
</button> 

<button onClick={this.showActiveCourses} className="btn btn-success mybutton btn-lg"> 
Active Courses 
</button> 
          </div> 
          <br/><br/> 

        <table>
          <thead>
            <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Is Active</th>
            </tr>
          </thead>
          <tbody>{courseListToDisplay}</tbody>
        </table>
        <h3> Trainer name : {this.state.trainerName} </h3> 
        <h3> Trainer Email : {this.state.trainerEmail} </h3> 
          </div>
        );
    }
}

export default mycourses;