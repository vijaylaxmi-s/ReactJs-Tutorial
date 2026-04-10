import useCounter from "./useCounter";
import "bootstrap/dist/css/bootstrap.min.css";

const HelloComponent = () => {
  const [count, doIncrement, doDecrement, doReset] = useCounter(0, 1);

  return (
    <div className="container">
      <h2> I am Hello Component - {count} </h2>
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

export default HelloComponent;
