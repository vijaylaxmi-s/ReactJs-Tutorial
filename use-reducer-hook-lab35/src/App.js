import CourseComponent from "./CourseComponent";
import { MyCourseProvider } from "./courseContext";

function App() {
  return (
    <MyCourseProvider>
      <div className="container">
        <CourseComponent />
      </div>
    </MyCourseProvider>
  );
}

export default App;
