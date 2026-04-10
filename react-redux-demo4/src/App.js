import { Provider } from "react-redux";
import CourseComponent from "./CourseComponent";
import mystore from "./mystore";

function App() {
  return (
    <Provider store={mystore}>
      <div className="container">
        <h2 className="text-center">Welcome To JLC !!!</h2>
        <hr />
        <CourseComponent />
      </div>
    </Provider>
  );
}

export default App;
