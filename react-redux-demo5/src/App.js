import { Provider } from "react-redux";
import CourseListComponent from "./CourseListComponent";
import mystore from "./mystore";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={mystore}>
      <div className="container">
        <h2 className="text-center">Welcome To JLC !!!</h2>
        <hr />
        <CourseListComponent />
      </div>
    </Provider>
  );
}

export default App;
