import { useState, useCallback } from "react";
import useDocTitle from "./useDocTitle";

const HelloComponent = () => {
  const [count, setCount] = useState(0);

  const UpdateCounter = () => {
    setCount(count + 1);
  };

  useDocTitle("Green", count);

  return (
    <div className="container">
      <h2> I am Hello Component - {count} </h2>
      <button onClick={UpdateCounter} className="bg-success">
        You clicked me {count} times
      </button>
    </div>
  );
};

export default HelloComponent;
