import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTextArea from "../mycomponents/MyTextArea";
import MyButton from "../mycomponents/MyButton";

class TextAreaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remarks: "",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmithandler = this.onSubmithandler.bind(this);
  }

  onChangeHandler = (myevent) => {
    console.log("onChangeHandler");
    this.setState({
      remarks: myevent.target.value,
    });
  };

  onSubmithandler = (myevent) => {
    myevent.preventDefault();
    console.log("onSubmithandler");
    console.log(this.state.remarks);
    //form Reset
    this.setState({
      remarks: "",
    });
  };

  render() {
    const { remarks } = this.state;
    return (
      <div className="card-body container col-md-6">
        <h3 className="text-center">Text Area Demo</h3>
        <form onSubmit={this.onSubmithandler}>
          <MyTextArea
            mylable="Remarks"
            myvalue={remarks}
            myOnChange={this.onChangeHandler}
          />
          <br />
          <MyButton myvalue="Submit Now" />
        </form>
      </div>
    );
  }
}

export default TextAreaDemo;
