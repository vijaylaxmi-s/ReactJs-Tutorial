import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCheckBox from "../mycomponents/MyCheckBox";
import MyButton from "../mycomponents/MyButton";


class CheckBoxDemo extends Component {
  state = {
    mycourses: [
      { id: 1, value: "React Js", ischecked: true },
      { id: 2, value: "Angular", ischecked: false },
      { id: 3, value: "Spring Boot", ischecked: true },
      { id: 4, value: "Microservices", ischecked: false },
      { id: 5, value: "Java FD", ischecked: false },
    ],
  };

  onChangeHandler = (myevent) => {
    console.log("onChangeHandler");
    let mycourses= this.state.mycourses;
    mycourses.forEach((mycourse)=>{
      if(mycourse.value === myevent.target.value) {
        mycourse.ischecked = myevent.target.checked;
      }

    })
    this.setState({
      mycourses: mycourses
    });
  };

  onSubmithandler = (myevent) => {
    myevent.preventDefault();
    console.log("onSubmithandler");
    console.log(this.state.mycourses);
    let courseList =[];
     this.state.mycourses.forEach((mycourse)=>{
      if(mycourse.ischecked === true ) {
       courseList.push(mycourse.value);
      }

    });
    console.log("Selected Courses: ", courseList);

    //form Reset
    this.setState({
       mycourses: [
      { id: 1, value: "React Js", ischecked: false },
      { id: 2, value: "Angular", ischecked: false },
      { id: 3, value: "Spring Boot", ischecked: false },
      { id: 4, value: "Microservices", ischecked: false },
      { id: 5, value: "Java FD", ischecked: false },
    ],
    });
  };

  render() {
    return (
      <div className="card-body container col-md-6">
        <h3 className="text-center">Check Box Demo</h3>
        <form onSubmit={this.onSubmithandler}>
          <div className="checkbox">
            {this.state.mycourses.map((mycourse) => {
              return (
                <MyCheckBox
                  key={mycourse.id}
                  mylabel={mycourse.value}
                  myvalue={mycourse.value}
                  mychecked={mycourse.ischecked}
                  myOnChange={this.onChangeHandler}
                />
              );
            })}
          </div>

          <br />

          <MyButton  myvalue="Submit Now" />

        </form>
      </div>
    );
  }
}

export default CheckBoxDemo;
