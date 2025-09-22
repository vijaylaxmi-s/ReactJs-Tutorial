import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  state = {
      name:"DS",
      styleFlag: false,
      classFlag:false
};

changeStyle = () =>{
  let myflag = this.state.styleFlag;
  this.setState({
  styleFlag : !myflag
  });
}

changeClasses = () =>{
  let myflag = this.state.classFlag;
  this.setState({
  classFlag : !myflag
  });
}


render(){
let mystyles = {
  color:'blue', 
fontSize:'25px', 
border:'2px solid red', 
borderRadius:'5px', 
padding:'10px', 
fontFamily:'Cambria'
};

if(this.state.styleFlag===true){ 
  mystyles = { 
  color:'blue', 
  fontSize:'25px', 
  border:'5px solid red', 
  borderRadius:'15px', 
  padding:'10px' 
  }; 
  }else{ 
  mystyles={ 
  color:'red', 
  fontSize:'25px', 
  border:'2px solid blue', 
  borderRadius:'5px', 
  padding:'10px' 
  }; 
  } 
  
//Define Array of CSS Classes
let myclassList = ["myclass1","myclass2"];
console.log(myclassList.join(" ")); 
if(this.state.classFlag==false){ 
  myclassList.slice(2,1); 
  myclassList.push("myred");
}else{ 
  myclassList.slice(2,1); 
  myclassList.push("myblue"); 
  }


  return(
    <div className="container">
      <h2 className="text-center">Welcome to Java Learning Center </h2>
      <br/>
      <p> 1. Appying Styles -Static Way</p> 
       <div style={{color:'red', fontSize:'25px', border:'2px solid blue',
       borderRadius:'5px', padding:'10px',fontFamily:'Cambria' }}>
        You are learning React 16 from {this.state.name}!!!
       </div>
       <br/>
       
       <p> 2. Appying Styles -Dynamic Way</p> 
       <div style={mystyles}>
       You are learning React 16 from {this.state.name}!!!
       </div>
       <br/>
       <button onClick={this.changeStyle} className="btn btn-success">Change Styles</button>
       <br/>
       
       <br/> 
       <p> 3. Appying Classes -Static Way</p>
       <div className="myclass1 myclass2 myblue"> 
              You are learning React 16 from { this.state.name}!!! 

        </div> 
        <br/> 
        <br/>
        <p> 4. Appying Classes -Dynamic Way</p> 
        <div className={myclassList.join(" ")}>
        You are learning React 16 from { this.state.name}!!! 
       </div> 
       <br/> 
      <button onClick={this.changeClasses} className="btn btn-success"> Change Classes</button> 
     <br/> 
    </div>
);

};
 
}

export default App;
