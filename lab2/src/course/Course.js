import { Component } from "react";
import './Course.css'

class Course extends Component {
    state = {
        courseId: "C-12",
        courseName : "React 16",
        cost: 15000,
        trainer:"SD"
    }
    render() {
        console.log("I am a Course Component")
        return(
            <div className = "mycourse">
                <p>CourseId: {this.state.courseId}</p>
                <p>CourseName: {this.state.courseName}</p>
                <p>Cost: {this.state.cost}</p>
                <p>Trainer: {this.state.trainer}</p>
            </div>
        );
    }
}

export default Course;