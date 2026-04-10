import React from "react";

//1.Create the Context
const studentContext = React.createContext();

//2. Define the initialState
const initialState = {
      studentId: 101, 
    studentName: "Dandes", 
    email: "dandes@jlc.com", 
    phone: 55555, 
}

export const MyStudentProvider = (props) =>{
    return(
         //3.Specify the Provider  
         <studentContext.Provider value={initialState} >
            {props.children}
         </studentContext.Provider>
    );
}
//4. Export the Cntext 
export const MyStudentContext = studentContext;

//4. Export the Consumer 
//export const MyStudentConsumer = studentContext.Consumer;