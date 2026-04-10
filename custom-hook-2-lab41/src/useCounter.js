import { useEffect, useState } from "react";

const useCounter = (initialCount =0 , value) => {
    const[count, setCount] = useState(initialCount);

    const doIncrement = () => {
        setCount(count + value);

    }
    const doDecrement = () => {
        setCount(count - value);

    }
    const doReset = () => {
        setCount(initialCount);

    }

    return[count, doIncrement, doDecrement, doReset];

};

export default useCounter;
