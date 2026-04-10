import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginComponent = () => {
  const usernameInput = useRef();
  const passowrdInput = useRef();

  const verifyUser = () => {
    console.log("verifyUser()");
    console.log("UN: ", usernameInput.current.value);
    console.log("PWD: ", passowrdInput.current.value);
  };

  useEffect(() => {
    usernameInput.current.focus();
   // passowrdInput.current.focus();
  }, []);

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <td>UserName</td>
            <td>
              <input ref={usernameInput} type="text" name="username" />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input ref={passowrdInput} type="password" name="password" />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={verifyUser.bind(this)}> Login Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoginComponent;
