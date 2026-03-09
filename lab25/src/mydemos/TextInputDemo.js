import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyTextInput from "../mycomponents/MyTextInput";
import MyButton from "../mycomponents/MyButton";


class TextInputDemo extends Component {
  state = {
    username: "",
    password:""
  };
  onChangeHandler = (myevent) => {
    console.log("onChangeHandler");
    this.setState({
      [myevent.target.name]: myevent.target.value,
    });
  };

  onSubmithandler = (myevent) => {
    myevent.preventDefault();
    console.log("onSubmithandler");
    console.log(this.state);
    //form Reset
    this.setState({
      username: "",
      password:"",
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="card-body container col-md-6">
        <h3 className="text-center">Input Text Demo</h3>
        <form onSubmit={this.onSubmithandler}>
          <MyTextInput
            mytype="text"
            myname="username"
            mylable="User Name"
            myvalue={username}
            myOnChange={this.onChangeHandler}
          />

          <MyTextInput
            mytype="password"
            myname="password"
            mylable="Password"
            myvalue={password}
            myOnChange={this.onChangeHandler}
          />
          <br/>
          <MyButton  myvalue="Submit Now" />
          

        </form>
      </div>
    );
  }
}

export default TextInputDemo;
