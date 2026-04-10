import { configureStore } from "@reduxjs/toolkit";
import { myAllCoursesReducer } from "./courseReducer";
import { oneCourseReducer } from './courseReducer'; 
import { logger } from 'redux-logger';

const mystore = configureStore({
  reducer: {
    mycourses: myAllCoursesReducer,
    mycourse: oneCourseReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default mystore;
