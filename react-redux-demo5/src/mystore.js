import { configureStore } from "@reduxjs/toolkit";
import myAllCoursesReducer from "./courseReducer";
import { logger } from 'redux-logger';

const mystore = configureStore({
  reducer: {
    mycourses: myAllCoursesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default mystore;
