import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyTextInput from "./MyTextInput";

const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChangeHandler = (event) => {
    console.log("onChangeHandler");
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    console.log("onSubmitHandler");
    event.preventDefault();
    console.log(username);
    console.log(password);
    //Do + API calls
    if (username === password) {
      history("/courses", {replace: true});
    } else {
      history("/login", {replace:true});
    }
  };

  return (
    <div className="card-body container col-md-6">
      <h3 className="text-center"> Login Form </h3>
      <form onSubmit={onSubmitHandler}>
        <MyTextInput
          myname="username"
          mylabel="Username"
          myvalue={username}
          myOnChange={onChangeHandler}
        />
        <MyTextInput
          mytype="password"
          myname="password"
          mylabel="Password"
          myvalue={password}
          myOnChange={onChangeHandler}
        />

        <input
          type="submit"
          value="Login Now"
          className="btn btn-primary btn-lg"
        />
      </form>
    </div>
  );
};

export default Login;
