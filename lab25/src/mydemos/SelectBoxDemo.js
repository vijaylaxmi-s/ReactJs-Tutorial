import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MySelectBox from "../mycomponents/MySelectBox";
import MyButton from "../mycomponents/MyButton";


class SelectBoxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timings: null,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmithandler = this.onSubmithandler.bind(this);
  }

  onChangeHandler = (myevent) => {
    console.log("onChangeHandler");
    this.setState({
      timings: myevent.target.value,
    });
  };

  onSubmithandler = (myevent) => {
    myevent.preventDefault();
    console.log("onSubmithandler");
    console.log(this.state.timings);
    //form Reset
    this.setState({
      timings: null,
    });
  };

  render() {
    const timingsOptions = ["Select Timings", "WeekDays", "WeekEnds"];
    // const courseOptions = [
    //   "React JS",
    //   "Microservice",
    //   "MongodB",
    //   "Devops",
    //   "AWS",
    // ];

    return (
      <div className="card-body container col-md-6">
        <h3 className="text-center">Select Box Demo</h3>
        <form onSubmit={this.onSubmithandler}>
          <MySelectBox
            mylable="Timings"
            myname="timings"
            myoptions={timingsOptions}
            myOnChange={this.onChangeHandler}
          />
          <br />
          <MyButton myvalue="Submit Now" />
        </form>
      </div>
    );
  }
}

export default SelectBoxDemo;
