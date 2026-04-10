
//1.Define the Initial State 
const initialState = { 
    studentId: 501, 
    studentName: "Dande", 
    email: "Dande@jlc.com", 
    phone: 99999 
} 
 
//2.Define the Reducer 
const studentReducer = (state = initialState, action) => { 
    switch (action.type) { 
 
        default: 
            return state; 
    } 
} 
 
export default studentReducer; 