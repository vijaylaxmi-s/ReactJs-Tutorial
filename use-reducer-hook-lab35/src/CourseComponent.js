import { useContext } from "react";
import { MyCourseContext } from "./courseContext";
import { UPDATE_CNAME, UPDATE_PRICE } from "./courseTypes";
import { UPDATE_DURATION, UPDATE_TRAINER } from "./courseTypes";
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseComponent = () => {
  const mycourseConsumer = useContext(MyCourseContext);
  const { courseData, courseDispatch } = mycourseConsumer;
  const { courseId, courseName, price, duration, trainer } = courseData;

  const updateCourseName = (updatedCname) => {
    console.log("A", "CourseComponent - updateCourseName", updatedCname);
    courseDispatch({
      type: UPDATE_CNAME,
      payload: updatedCname,
    });
  };

  const updatePrice = (updatedPrice) => {
    console.log("A", "CourseComponent - updatePrice", updatedPrice);
    courseDispatch({
      type: UPDATE_PRICE,
      payload: updatedPrice,
    });
  };

  const updateDuration = (updatedDuration) => {
    console.log("A", "CourseComponent - updateDuration", updatedDuration);
    courseDispatch({
      type: UPDATE_DURATION,
      payload: updatedDuration,
    });
  };

  const updateTrainer = (updatedTrainer) => {
    console.log("A", "CourseComponent - updateTrainer", updatedTrainer);
    courseDispatch({
      type: UPDATE_TRAINER,
      payload: updatedTrainer,
    });
  };

  return (
    <div className="container">
      <br />{" "}
      <b>
        <u>
          <h2 className="text-center"> Course Info</h2>{" "}
        </u>{" "}
      </b>
      <br />
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h4>Course ID: {courseId} </h4>
              </td>
            </tr>

            <tr>
              <td>
                <h4> Course Name : {courseName}</h4>{" "}
              </td>
              <td>
                <button
                  onClick={updateCourseName.bind(this, "Master React 16")}
                  className="btn btn-success"
                >
                  Update Course Name
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Price :{price}</h4>
              </td>
              <td>
                <button
                  onClick={updatePrice.bind(this, 13000)}
                  className="btn btn-success"
                >
                  Update Price
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <h4> Duration : {duration}</h4>{" "}
              </td>
              <td>
                <button
                  onClick={updateDuration.bind(this, "75 Hrs")}
                  className="btn btn-success"
                >
                  Update Duration
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <h4> Trainer : {trainer}</h4>{" "}
              </td>
              <td>
                <button
                  onClick={updateTrainer.bind(this, "Srinivas Dande")}
                  className="btn btn-success"
                >
                  Update Trainer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseComponent;
