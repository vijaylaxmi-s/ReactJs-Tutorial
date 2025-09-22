import { Component } from "react";

class Course extends Component{
state = {
    showCourseInfo : false,
    }

    showCourseInfo = () =>{
        console.log("showInfo - Clicked"); 
        let showCourseFlag = this.state.showCourseInfo;
        this.setState({
            showCourseInfo: !showCourseFlag
        });
    }

render() {
    let courseBody = null;
    if(this.state.showCourseInfo){
        courseBody = (
            <div className="card-body">
                <h5 className="card-title"> Trainer : {this.props.course.trainer}</h5> 
                <h5 className="card-title"> Price : {this.props.course.price}</h5> 
                <h5 className="card-title"> Training Type : {this.props.course.isOnline ? "Online" : "Classroom"}</h5> 
            </div>
        );
    }

  return(
  <div className="container-fluid">
    <div className="card">
        <div className="card-header">
            <h5>{this.props.course.cname} Training  (Code: {this.props.course.cid})
                <button onClick={this.showCourseInfo} className="btn btn-info" style={{float : 'right'}}> 
                More Info</button> </h5>
      </div>
        {courseBody}
    </div>
  </div>

  );

};

}

export default Course;