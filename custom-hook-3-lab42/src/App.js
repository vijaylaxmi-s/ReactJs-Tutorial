import "bootstrap/dist/css/bootstrap.min.css";
import { BookList } from "./BookList";
import { AddBook } from "./AddBook";
import { GetBookById } from "./GetBookById";
import { DeleteBook } from "./DeleteBook";

function App() {
  return (
    <div className="container">
        {/* <BookList />  */}
        {/* <AddBook /> */}
        {/* <GetBookById id= "30" /> */}
        <DeleteBook id  = "40"/>
    </div>
  );
}

export default App;
