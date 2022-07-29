
import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run all the time");
  const RunOnce = () => {
    console.log("run only once.");
  };
  useEffect(RunOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
