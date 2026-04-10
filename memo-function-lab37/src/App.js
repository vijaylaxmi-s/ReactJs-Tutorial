import { useState } from "react";
import PriceComponent from "./PriceComponent";

function App() {
  console.log("[App] - Rendered"); 
  const [courseName, setCourseName] = useState("React JS");
  const [coursePrice, setCoursePrice] = useState(10000);

  const updateName = () => {
    if (courseName === "React JS") {
      setCourseName("React JS 16");
    } else {
      setCourseName("React JS");
    }
  };

  const updatePrice = () => {
    if (coursePrice === 10000) {
      setCoursePrice(12000);
    } else {
      setCoursePrice(10000);
    }
  };

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <td>Course Name</td>
            <td>{courseName}</td>
            <td>
              <button onClick = {updateName.bind(this)} className="btn btn-success">Update Name </button>
            </td>
          </tr>
          <tr>
            <td>Course Price</td>
            <td>{coursePrice}</td>
            <td><button onClick = {updatePrice.bind(this)} className="btn btn-success">Update Price</button></td>
          </tr>
        </tbody>
        </table>
      <PriceComponent price = {coursePrice} />
    </div>
  );
}

export default App;
