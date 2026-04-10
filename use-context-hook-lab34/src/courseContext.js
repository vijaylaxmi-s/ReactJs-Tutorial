import React from "react"; 
import { useState } from "react"; 

//1.Create the Context
const courseContext = React.createContext();

export const MyCourseProvider =(props) =>{
    const[courseInfo, setCourseInfo] = useState({
         courseId: "C-11", 
            courseName: "Spring MicroServices", 
            cost: 18000, 
            trainer: "Srinivas Dande", 
    }

    );
    return(
        <courseContext.Provider value={courseInfo}>
            {props.children}
        </courseContext.Provider>
    );
}

//4. Export the Context 
export const MyCourseContext = courseContext;

//4. Export the Context 
//export const MyCourseConsumer = courseContext.Consumer;
