import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses =  (props) => {
    
    const [courseState, setCourseState] = useState({
        trainerName: "Sri",
        trainerEmail:"Sri@gmail.com",
        mycoursesList:[
        {cid: 101, cname: "My Angular 7", price: 15000},
        {cid: 102, cname: "My React 16", price: 15000},
        {cid: 103, cname: "My Java FSD", price: 35000},
        {cid: 104, cname: "My Microservices", price: 25000},
        {cid: 105, cname: "My DevOps", price: 15000}

] });

useEffect( () => {
    console.log("[Courses] - 1st - useEffect()");
    return () => {
         //cleanup
     console.log("[Courses] - Cleanup -  1st - useEffect()");
    }
});
    
useEffect( () => {
    console.log("[Courses] - 2nd - useEffect()");
    return () =>{
         //cleanup
     console.log("[Courses] - Cleanup -  2nd - useEffect()");

    }
});
    
useEffect( () => {
    console.log("[Courses] - 3rd - useEffect()");

    return () => {
         //cleanup
     console.log("[Courses] - Cleanup -  3rd - useEffect()");

    }
});

const showAllCourses = () => {
    console.log("Button - clicked");
    setCourseState({
        trainerName: "Sri",
        trainerEmail:"Sri@gmail.com",
        mycoursesList:[
        {cid: 101, cname: "My Angular 7", price: 12000},
        {cid: 102, cname: "My React 16", price: 12000},
        {cid: 105, cname: "My DevOps", price: 12000}
        ]

    });
}

let courseListToDisplay = courseState.mycoursesList.map(
    (mycourse, myindex) => (
        <tr key={myindex}>
            <td>
                <h6>{mycourse.cid}</h6>
            </td>
            <td>
                <h6>{mycourse.cname}</h6>
            </td>
            <td>
                <h6>{mycourse.price}</h6>
            </td>
        </tr>
    )
);

return(
    <div className="container">
         <div className="container" style={{float:"right"}}>
          <button className="btn btn-primary mybutton" onClick={showAllCourses}>
            Show All Courses
            </button>  
            <br/> <br/>
         </div>
         <div className="Container">
            <table className="table table-striped table-light table-bordered">
                <tbody>{courseListToDisplay}</tbody>
            </table>
        </div>
        <h2> Trainer Name: {courseState.trainerName}</h2>
        <h2> Trainer Name: {courseState.trainerEmail}</h2>

    </div>
);

}

export default Courses;

