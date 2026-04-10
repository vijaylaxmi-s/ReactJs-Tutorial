import { useMyAxios } from "./useMyAxios";

export const BookList = () => {
  const { response, error, loading } = useMyAxios({
    method: "GET",
    url: "http://localhost:4000/api/books",
    headers:{
      "Cache-Control":"no-cache",
    }
  });

  const mybooksList = (response || []).map((mybook) => {
    return (
      <tr key={mybook.id}>
        <td> {mybook.id} </td>
        <td> {mybook.bookName} </td>
        <td> {mybook.author} </td>
        <td> {mybook.price} </td>
        <td> {mybook.category} </td>
        <td> {mybook.publications} </td>
        <td>
          <button className="btn btn-success"> View Details </button>
        </td>
      </tr>
    );
  });

  const mybooksListToDisplay = (
    <table className="table">
      <thead>
        <tr>
          <th> Book ID</th>
          <th> Book Name</th>
          <th> Author</th>
          <th> Price</th>
          <th> Category</th>
          <th> Publications</th>
        </tr>
      </thead>
      <tbody>{mybooksList}</tbody>
    </table>
  );

  const messageToDisplay = error ? <h3>{error.message} </h3> : null;

  let toDisplay = null;
  if (loading) {
    toDisplay = <h3>Loading...Please Wait...</h3>;
  } else if (error) {
    toDisplay = messageToDisplay;
  } else if (!response || response.lenght === 0) {
    toDisplay = <h3>No books found.</h3>;
  } else {
    toDisplay = mybooksListToDisplay;
  }

  return (
    <div className="container">
      <br />
      {toDisplay}
    </div>
  );
};
