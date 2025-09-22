import { Component } from "react";
import './Course.css'

class Course extends Component {
    state = {
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
                <p>Course Id : {this.props.mycourse.courseId}</p>
                <p>Course Name : {this.props.mycourse.courseName}</p>
                <p>price : {this.props.mycourse.price}</p>
                <p>Trainer : {this.props.mycourse.trainer}</p>
            
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