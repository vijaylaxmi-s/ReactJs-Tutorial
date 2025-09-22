import React, { Component } from "react";

class LoginForm extends Component {
  static defaultProps = {
    username: "VSC",
    password: "SSC123",
  };
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  myclickHandler = (myevent) => {
    myevent.preventDefault();
    console.log("myclickHandler");
    console.log("UN: ", this.usernameInput.current.value);
    console.log("PW: ", this.passwordInput.current.value);
  };

  // mySubmitHandler = (myevent) => {
  //   myevent.preventDefault();
  //   console.log("mySubmitHandler");
  //console.log("UN: ", this.usernameInput.current.value);
  //console.log("PW: ", this.passwordInput.current.value);
  // };

  render() {
    return (
      <div className="container col-md-6">
        <h2 className="text-center">Login Form</h2>
        <form onSubmit={this.mySubmitHandler}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="username">Username</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Enter Username..."
                    defaultValue={this.props.username}
                    ref={this.usernameInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="passweord"
                    className="form-control form-control-lg"
                    placeholder="Enter Password..."
                    defaultValue={this.props.password}
                    ref={this.passwordInput}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <button
                    type="submit"
                    onClick={this.myclickHandler}
                    className="btn btn-primary btn-lg"
                  >
                    <h2>Login Now</h2>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          Welcome {this.props.username}
        </form>
      </div>
    );
  }
}

export default LoginForm;
