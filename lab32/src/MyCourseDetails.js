import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MyCourseDetails = (props) => {
  const [coursesDetails, setCoursesDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${id}`;
    console.log(URL);
    axios.get(URL).then((response) => {
      setCoursesDetails(response.data);
    });
  }, [id]);

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
              <th>Rate</th>
              <th>Count</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{coursesDetails.id}</td>

              <td>{coursesDetails.title}</td>

              <td>{coursesDetails.price}</td>

              <td>{coursesDetails.description}</td>

              <td>{coursesDetails.category}</td>

              <td>
                <img
                  src={coursesDetails.image}
                  alt={coursesDetails.title}
                  style={{ width: "100px" }}
                />{" "}
              </td>

              <td>{coursesDetails.rating?.rate}</td>
              <td>{coursesDetails.rating?.count}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourseDetails;
