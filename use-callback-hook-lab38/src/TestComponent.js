import { useState, useCallback } from "react";
import HeaderComponent from "./HeaderComponent";
import CourseComponent from "./CourseComponent";
import ButtonComponent from "./ButtonComponent";

const TestComponent = () => {
  console.log("[TestComponent] - Rendered");
  const [reactPrice, setReactPrice] = useState(10000);
  const [angularPrice, setAngularPrice] = useState(10000);
  const [devOpsPrice, setDevOpsPrice] = useState(10000);

  const updateReactPrice = useCallback(() => {
    console.log("update React Price");
    setReactPrice(reactPrice + 2000);
  }, [reactPrice]);

  const updateAngularPrice = useCallback(() => {
    console.log("update Angular Price");
    setAngularPrice(angularPrice + 3000);
  }, [angularPrice]);

  const updateDevOpsPrice = useCallback(() => {
    console.log("update Angular Price");
    setDevOpsPrice(devOpsPrice + 3500);
  }, [devOpsPrice]);

  return (
    <div className="container">
      <HeaderComponent />
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td>
              <CourseComponent courseName="React Js" price={reactPrice} />
            </td>
            <td>
              <ButtonComponent
                clickHandler={updateReactPrice}
                courseName="React Js"
              >
                Update React Price
              </ButtonComponent>
            </td>
          </tr>
          <tr>
            <td>
              <CourseComponent courseName="Angular Js" price={angularPrice} />
            </td>
            <td>
              <ButtonComponent
                clickHandler={updateAngularPrice}
                courseName="Angular Js"
              >
                Update Angular Price
              </ButtonComponent>
            </td>
          </tr>
          <tr>
            <td>
              <CourseComponent courseName="Devops" price={devOpsPrice} />
            </td>
            <td>
              <ButtonComponent
                clickHandler={updateDevOpsPrice}
                courseName="Devops"
              >
                Update Devops Price
              </ButtonComponent>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
    </div>
  );
};

export default TestComponent;
