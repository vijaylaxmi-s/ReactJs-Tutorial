import { useMyAxios } from "./useMyAxios"

export const DeleteBook = (props) => {
    const{response} = useMyAxios({
        method:"DELETE",
        url:`/api/deleteBook/${props.id}`,
  });
   console.log("MyBook - Response : ", response); 
 
    return ( 
        <div className="container"> 
            {response ? JSON.stringify(response): "Loading...   " } 
        </div > 
    ); 
}