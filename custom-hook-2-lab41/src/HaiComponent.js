import "bootstrap/dist/css/bootstrap.min.css";
import useCounter from "./useCounter";

const HaiComponent = () => {
  const [count, doIncrement, doDecrement, doReset] = useCounter(0, 1);

  return (
    <div className="container">
      <h2> I am Hai Component - {count}</h2>
       <button onClick={doIncrement} className="btn btn-success">
        Increment
      </button>
      <button onClick={doDecrement} className="btn btn-danger">
        Decrement
      </button>
      <button onClick={doReset} className="btn btn-warning">
        Reset
      </button>
    </div>
  );
};

export default HaiComponent;
