import './App.css';
import { Component } from 'react';
import Student from './student/Student';

class App extends Component {

  state  = {
    myheader : "Welcome to Java Learning Center"
  }

  render() { //overriding
    console.log("I am a Component");
    return (
      <div className="myheader">
      <p>{this.state.myheader}</p>
      <br/>
      <Student />
      <Student />
      </div>
    );
  }
 
}

export default App;
