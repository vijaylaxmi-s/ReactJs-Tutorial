import { useMyAxios } from "./useMyAxios";

export const AddBook = () => {
  const { response} = useMyAxios({
    method: "POST",
    url: "http://localhost:4000/api/addBook",
    headers: {
      accept: "*/*",
    },
    data: {
      bookName: "Learn Java15",
      author: "Dande",
      price: 999,
      category: "Java",
      publications: "JLC",
    },
  });

  console.log("Response : ", response);
  return <div className="container">
      <p><strong>Book Name:</strong> {response.bookName}</p>
      <p><strong>Author:</strong> {response.author}</p>
      <p><strong>Price:</strong> ${response.price}</p>
      <p><strong>Category:</strong> {response.category}</p>
      <p><strong>Publications:</strong> {response.publications}</p>
    </div>;
};
