import { useMyAxios } from "./useMyAxios";

export const GetBookById = (props) => {
  const { response } = useMyAxios({
    method: "GET",
    url: `/books/${props.id}`,
  });
  console.log("MyBook - Response : ", response);

  const mybook = response;
  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr key={mybook.bookId}>
            <td> {mybook.bookId} </td>
            <td> {mybook.bookName} </td>
            <td> {mybook.author} </td>
            <td> {mybook.price} </td>
            <td> {mybook.category} </td>
            <td> {mybook.publications} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
