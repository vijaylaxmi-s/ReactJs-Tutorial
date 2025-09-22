import { Component } from "react";

class Mycourse extends Component{
 
  static displayName = "MyCourseComponent";

  constructor(props) {
  super(props);
  console.log(1, "[MyCourses]- Constructor");
  
  this.state = {
    trainerName:"SD",
    trainerEmail:"SD@gmail.com",
    mycourseList:[
        {
          cid: 101,
          cname: "Angular 7",
          price:"15000",
          active:true
        },
        {
          cid: 102,
          cname: "React Js 16",
          price:"15000",
          active:true
        },
        {
          cid: 103,
          cname: "Java FSD",
          price:"35000",
          active:false
        },
        {
          cid:104,
          cname:"MicroServices",
          price:25000,
          active:true
        }, 
        {
          cid:105,
          cname:"DevOps",
          price:15000,
          active:false
        }, 
      ]
  }
  }

  static getDerivedStateFromProps(myprops , mystate){
    console.log(2,"[Mycourse] - getDerivedStateFromProps()");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Mycourse] - shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Mycourse] - getSnapshotBeforeUpdate()");
    return null;

  }

  componentDidUpdate(prevProps, prevState, mysnapshot){
    console.log("[Mycourse] - componentDidUpdate()");

  }

  componentDidMount() {
    console.log(4,"[Mycourse] - componentDidMount()");

  }

  componentWillMount() {
    console.log(5,"[Mycourse] - componentWillMount()");

  }

    render() {
      console.log(3,"[Mycourse] - render()");

      let courseListToDisplay = this.state.mycourseList.map(
        (mycourse) => (
          <tr key = {mycourse.cid}>
            <td><h6>{mycourse.cid}</h6></td>
            <td><h6>{mycourse.cname}</h6></td>
            <td><h6>{mycourse.price}</h6></td>
          </tr>
        )
      )
      return(
       <div className="container">
        <br/>
        <div className="container">
          <table className="table">
            <tbody>
              {courseListToDisplay}
            </tbody>

          </table>
        </div>

       </div>


      );
       
    }
}

export default Mycourse;