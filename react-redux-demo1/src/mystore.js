import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseReducer";
import studentReducer from "./studentReducer";

const mystore = configureStore({
  reducers: {
    mycourse: courseReducer,
    mystudent: studentReducer,
  },
});

export default mystore;
