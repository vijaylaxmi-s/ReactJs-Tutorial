import { useEffect } from "react";

const useDocTitle = (color, count) => {
    useEffect(() => {
        document.title = `You clicked ${color} button ${count} times`;
    },[count])

};

export default useDocTitle;
