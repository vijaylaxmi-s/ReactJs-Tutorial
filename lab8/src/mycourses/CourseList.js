import { Component } from "react";
import Course from './Course'

class CourseList extends Component{
state = {
    mycourseList : [],
    courseCount:0

}

showLowPriceCourses = () =>{
    console.log("Lowprice - Clicked");
    let courseToDisplay = this.props.mycourses.filter(mycourse =>mycourse.price <= 15000);
    console.log(courseToDisplay); 
    this.setState({
     mycourseList : courseToDisplay,
     courseCount: courseToDisplay.length
    });

}

showOnlineCourses= () =>{
    console.log("Online - Clicked");
    let courseToDisplay = this.props.mycourses.filter(mycourse =>mycourse.isOnline === true);
    console.log(courseToDisplay); 

   this.setState({
    mycourseList : courseToDisplay,
    courseCount: courseToDisplay.length
   });
}



showAllCourses = () =>{
    console.log("All -Clicked");
    this.setState({
        mycourseList : this.props.mycourses,
        courseCount : this.props.mycourses.length

    });
}

componentDidMount() {
    this.showAllCourses();
}


render(){
    let courseListData = this.state.mycourseList.map(mycourse =>{
      return <Course key = {mycourse.cid}
      course = {mycourse} />
    });
    return(
        <div className="container-fluid">
       <div className="container-fluid">
       <button onClick={this.showAllCourses} className="btn btn-success mybutton btn-Ig">All Courses</button>
       <button onClick={this.showLowPriceCourses} className="btn btn-success mybutton btn-Ig">Low Price Courses</button>
       <button onClick={this.showOnlineCourses} className="btn btn-success mybutton btn-Ig">Online Courses</button>
       </div>
       <br/>
       <h3>Result: {this.state.courseCount}</h3>
       <br/>
       {courseListData}
        </div>
    );
};

}


export default CourseList;
