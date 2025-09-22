import { Component } from "react";
import './Course.css'

class Course extends Component {
    state = {
        courseId: "C-12",
        courseName : "React 16",
        cost: 15000,
        trainer:"SD",
        showCourse: false
    }
    showCourseInfo= () => {
     console.log("Button is Clicked");
     let courseFlag = this.state.showCourse;
     this.setState({
        showCourse: !courseFlag

     });
    }
    render() {
        console.log("render() - Course Component")
        
        let myCourseInfo = null;
        if(this.state.showCourse === true) {
        myCourseInfo = (
            <div className = "mycourse">
            <p>CourseId: {this.state.courseId}</p>
            <p>CourseName: {this.state.courseName}</p>
            <p>Cost: {this.state.cost}</p>
            <p>Trainer: {this.state.trainer}</p>
        </div>
        );
    }
        return(
            <div>
                <button className="mybutton" onClick={this.showCourseInfo}>Course Info</button>
          {myCourseInfo} 
          </div>
        );
    }
}

export default Course;