import { useState, useCallback } from "react";
import useDocTitle from "./useDocTitle";

const HaiComponent = () => {
  const [count, setCount] = useState(0);

  const updateCounter = () => {
    setCount(count + 1);
  };

  useDocTitle("Red", count);

  return (
    <div className="container">
      <h2> I am Hai Component - {count}</h2>
      <button onClick={updateCounter} className="bg-danger">
        You clicked me {count} times
      </button>
    </div>
  );
};

export default HaiComponent;
