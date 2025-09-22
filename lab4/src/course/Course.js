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
                <p>Course Id : {this.props.mycid}</p>
                <p>Course Name : {this.props.mycname}</p>
                <p>price : {this.props.myprice}</p>
                <p>Trainer : {this.props.mytrainer}</p>
                {/* <p>hello:{ this.props.hello}</p> */}
            
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