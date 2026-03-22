import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import JLCHeader from "./JLCHeader";
import JLCBody from "./JLCBody";


const App = () => {
   return (
      <BrowserRouter>
        <div className="card">
         <JLCHeader />
         <JLCBody />
        </div>
      </BrowserRouter>
    );
  }

export default App;
