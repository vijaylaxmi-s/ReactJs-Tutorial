import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRadioButton from "../mycomponents/MyRadioButton";
import MyButton from "../mycomponents/MyButton";

class RadioButtonDemo extends Component {
  state = {
    gender: "",
  };

  onChangeHandler = (myevent) => {
    console.log("onChangeHandler");
    this.setState({
      gender: myevent.target.value,
    });
  };

  onSubmithandler = (myevent) => {
    myevent.preventDefault();
    console.log("onSubmithandler");
    console.log(this.state.gender);
    //form Reset
    this.setState({
      gender: "",
    });
  };

  render() {
    return (
      <div className="card-body container col-md-6">
        <h3 className="text-center">Radio Button Demo</h3>
        <form onSubmit={this.onSubmithandler}>
          <div className="radio">
            <MyRadioButton
              mylabel="Male"
              myname="gender"
              myvalue="Male"
              mychecked={this.state.gender === "Male"}
              myOnChange={this.onChangeHandler}
            />

            <MyRadioButton
              mylabel="FeMale"
              myname="gender"
              myvalue="FeMale"
              mychecked={this.state.gender === "FeMale"}
              myOnChange={this.onChangeHandler}
            />
            <br />
            <MyButton myvalue="Submit Now" />
          </div>
        </form>
      </div>
    );
  }
}

export default RadioButtonDemo;
