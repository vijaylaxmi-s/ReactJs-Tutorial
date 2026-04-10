
//1. Define the Initial State
const initialState = {
  courseId: "C-101",
  courseName: "Master React ",
  price: 10000,
  duration: "50 Hrs",
  trainer: "SD",
};

//2. Define the Reducer
const courseReducer = (currentState = initialState, action) => {
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

export default courseReducer;
