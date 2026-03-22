import axios from "axios";
import { useEffect, useState } from "react";

const CourseList = () => {
  const [mycourses, setMycourses] = useState([]);

  useEffect(() => {
    console.log("CourseList - componentDidMount");
    const URL = "https://fakestoreapi.com/products";
    axios
      .get(URL)
      .then((myresponse) => {
        console.log("1", myresponse.data);
        console.log("2", myresponse.headers);
        setMycourses(myresponse.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const mycourseList = mycourses.map((mycourse) => {
    return (
      <tr key={mycourse.id}>
        <td>{mycourse.id}</td>
        <td>{mycourse.title}</td>
        <td>${mycourse.price}</td>
        <td>{mycourse.description}</td>
        <td>{mycourse.category}</td>
        <td>
          <img src={mycourse.image} alt={mycourse.title} width="50" />
        </td>
        <td>{mycourse.rating.rate}</td>
        <td>{mycourse.rating.count}</td>
        <td>
          <button className="btn btn-success">View Details</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h2>Courses</h2>
      <div className="table-container">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating</th>
              <th>Reviews</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{mycourseList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;
