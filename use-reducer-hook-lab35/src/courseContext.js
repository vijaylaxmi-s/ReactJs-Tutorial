import React, { useReducer } from "react";
import { UPDATE_CNAME, UPDATE_PRICE } from "./courseTypes";
import { UPDATE_DURATION, UPDATE_TRAINER } from "./courseTypes";

//1.Create the Context
const courseContext = React.createContext();

//2.Define Initial State
const initialState = {
    courseId: "C-101", 
    courseName: "Master React ", 
    price: 10000, 
    duration:"50 Hrs", 
    trainer: "SD" 
};
//3. Define the Reducer
const myreducer = (currentState, action) => {
  console.log("C", "[courseContext]", action.type, action.payload);
  switch (action.type) {
    case UPDATE_CNAME:
      return {
        ...currentState,
        courseName: action.payload,
      };
    case UPDATE_PRICE:
      return {
        ...currentState,
        price: action.payload,
      };
    case UPDATE_DURATION:
      return {
        ...currentState,
        duration: action.payload,
      };
    case UPDATE_TRAINER:
      return {
        ...currentState,
        trainer: action.payload,
      };
    default:
      return currentState;
  }
};

export const MyCourseProvider = (props) => {
  const [courseData, courseDispatch] = useReducer(myreducer, initialState);
  return (
    <courseContext.Provider
      value={{
        courseData: courseData,
        courseDispatch: courseDispatch,
      }}
    >
      {props.children}
    </courseContext.Provider>
  );
};

//4. Export the Context
export const MyCourseContext = courseContext;
