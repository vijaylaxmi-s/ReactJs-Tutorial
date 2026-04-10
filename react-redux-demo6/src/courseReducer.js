import { FETCH_COURSES_REQUEST } from "./courseTypes";
import { FETCH_COURSES_SUCCESS } from "./courseTypes";
import { FETCH_COURSES_FAILURE } from "./courseTypes";

import { FETCH_ONE_COURSE_REQUEST } from "./courseTypes";
import { FETCH_ONE_COURSE_SUCCESS } from "./courseTypes";
import { FETCH_ONE_COURSE_FAILURE } from "./courseTypes";

//1. Define the Initial State
const allCoursesInitialState = {
  loadingStatus: false,
  error: {},
  courseList: [],
};

//2. Define the Reducer
export const myAllCoursesReducer = (
  currentState = allCoursesInitialState,
  action,
) => {
  switch (action.type) {
    case FETCH_COURSES_REQUEST:
      return {
        loadingStatus: true,
        courseList: [],
        error: {},
      };

    case FETCH_COURSES_SUCCESS:
      return {
        loadingStatus: false,
        courseList: action.payload,
        error: {},
      };

    case FETCH_COURSES_FAILURE:
      return {
        loadingStatus: false,
        courseList: [],
        error: action.payload,
      };

    default:
      return currentState;
  }
};

const oneCourseInitialState = {
  loadingStatus: false,
  oneCourse: {},
  error: {},
};

export const oneCourseReducer = (
  currentState = oneCourseInitialState,
  action,
) => {
  switch (action.type) {
    case FETCH_ONE_COURSE_REQUEST:
      return {
        ...currentState,
        loadingStatus: true,
      };

    case FETCH_ONE_COURSE_SUCCESS:
      return {
        loadingStatus: false,
        oneCourse: action.payload,
        error: {},
      };
    case FETCH_ONE_COURSE_FAILURE:
      return {
        loadingStatus: false,
        oneCourse: {},
        error: action.payload,
      };
    default:
      return currentState;
  }
};
