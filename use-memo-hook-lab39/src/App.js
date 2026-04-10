import { useMemo, useState } from "react";

function App() {
console.log("[App] - Rendered");
  const [numbers, setNumbers] = useState({ firstNum: 10, secondNum: 20 });

  const result = useMemo(() => {
    console.log("Function called for doing Math");
    return numbers.firstNum + numbers.secondNum;
  }, [numbers.firstNum + numbers.secondNum]);

  const changeNumbers = () => {
    setNumbers({
      firstNum: numbers.firstNum+5,
      secondNum: numbers.secondNum,
    });
  };

  return (
    <div className="container">
      <h2>
        {numbers.firstNum} + {numbers.secondNum} = {result}
      </h2>
      <div>
        <button onClick={() => changeNumbers()}> Change Numbers</button>
      </div>
    </div>
  );
}

export default App;
