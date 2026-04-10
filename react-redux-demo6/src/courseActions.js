import axios from "axios";
import { FETCH_COURSES_REQUEST } from "./courseTypes";
import { FETCH_COURSES_SUCCESS } from "./courseTypes";
import { FETCH_COURSES_FAILURE } from "./courseTypes";

import { FETCH_ONE_COURSE_REQUEST } from './courseTypes'; 
import { FETCH_ONE_COURSE_SUCCESS } from './courseTypes'; 
import { FETCH_ONE_COURSE_FAILURE } from './courseTypes'; 

export const fetchCourseRequest = () => {
  return {
    type: FETCH_COURSES_REQUEST,
  };
};

export const fetchCourseSuccess = (courses) => {
  return {
    type: FETCH_COURSES_SUCCESS,
     payload: courses
  };
};

export const fetchCourseFailure = (error) => {
  return {
    type: FETCH_COURSES_FAILURE,
     payload: error 
  };
};

export const fetchAllCourses = () => {
  return (courseDispatch) => {
    courseDispatch(fetchCourseRequest())

    axios.get("http://localhost:5000/courses")
    .then((response) => {
      const courseList = response.data;
       courseDispatch(fetchCourseSuccess(courseList))
    }).catch(error => {
        courseDispatch(fetchCourseFailure(error))
    })
  };
};

export const fetchOneCourseRequest = () => {
  return {
    type: FETCH_ONE_COURSE_REQUEST,
  };
};

export const fetchOneCourseSuccess = (course) => {
  return {
    type: FETCH_ONE_COURSE_SUCCESS,
     payload: course
  };
};

export const fetchOneCourseFailure = (error) => {
  return {
    type: FETCH_ONE_COURSE_FAILURE,
     payload: error 
  };
};


export const fetchOneCourse = (id) => {
  return(courseDispatch) =>{
    courseDispatch(fetchOneCourseRequest)

    axios.get(`http://localhost:5000/courses/${id}`)
    .then((response) =>{
      const course = response.data
      if(course){
        console.log(course);
      }else{
        console.log("data not received")
      }
      courseDispatch(fetchOneCourseSuccess(course));
    }).catch(error =>{
      courseDispatch(fetchOneCourseFailure(error));
    })
  }

}