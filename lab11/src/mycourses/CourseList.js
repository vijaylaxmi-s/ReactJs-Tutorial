import { Component } from "react";
import Course from './Course'

class CourseList extends Component{
state = {
    mycourseList : [],
    courseCount :0
};

    showLowPriceCourses = () =>{
        console.log("Lowprice - clicked");
        this.props.mycourses.filter()

    };


render() {

    let courseListData = this.state.mycourseList.map(mycourse => {
        return <Course key= {mycourse.cid} course= {mycourse} />
    });
    
    return(
        <div className="container">
            <div className="container">
                <button onClick={this.showAllCourses} className="btn btn-success mybutton"> All Courses</button>
                <button onClick={this.showLowPriceCourses} className="btn btn-success mybutton"> Low Price Courses</button>
                <button onClick={this.showOnlineCourses} className="btn btn-success mybutton"> Online Courses</button>
            </div>
            <br/>
            <h2>Results: {this.state.courseCount}</h2>
            <br/>
            {courseListData}
        </div>
    );
};

}

export default CourseList;
