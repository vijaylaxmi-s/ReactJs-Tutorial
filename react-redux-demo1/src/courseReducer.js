

//1. Define the Initial State
const initialState = { 
     courseId: "C-104", 
     courseName: "ReEact JS 17", 
     cost: 13500, 
     trainer: "Srinivas Dande", 
} 

//2. Define the Reducer
const courseReducer = (state = initialState , action) => {
    switch(action.type){
    
        default:
            return state;
    }

}

export default courseReducer; 
