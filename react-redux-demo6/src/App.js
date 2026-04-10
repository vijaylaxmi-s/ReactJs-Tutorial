import { Provider } from "react-redux";
import CourseListComponent from "./CourseListComponent";
import mystore from "./mystore";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import CourseDetailsComponent from "./CourseDetailsComponent";

function App() {
  return (
    <BrowserRouter>
      <Provider store={mystore}>
        <div className="container">
          <h2 className="text-center">Welcome To JLC !!!</h2>
          <hr />
          <CourseListComponent />
          <hr/>
          <CourseDetailsComponent />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
