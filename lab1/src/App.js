import React from 'react';

import './App.css';

// this is jsx- extended java script
const App = () => {

  const companyName= "Java Learning Center";
  let courseName = "Reacy 17";

  return (
    <div className="myclass">
      <p className='myclass1'>Welcome to  {companyName}</p>
      <p className='myclass2'>You are learning {courseName} from Sir</p>
    </div>
  );

}

export default App;
