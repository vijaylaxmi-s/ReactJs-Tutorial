import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseReducer";

const mystore = configureStore({
  reducers: {
    mycourse: courseReducer,
  },
});

export default mystore;
