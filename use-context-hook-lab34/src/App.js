import CourseComponent from "./CourseComponent";
import { MyCourseProvider } from "./courseContext";
import StudentComponent from "./StudentComponent";
import { MyStudentProvider } from "./studentContext";
import TestComponent from "./TestComponent";

function App() {
  return (
    <MyStudentProvider>
      <MyCourseProvider>
        <StudentComponent />
        <CourseComponent />
        <TestComponent />
      </MyCourseProvider>
    </MyStudentProvider>
  );
}

export default App;
