
import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick1 = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const RunOnce = () => {
    console.log("run only once.");
  };
  useEffect(RunOnce, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword' && 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here....." />
      <h1>{counter}</h1>
      <button onClick={onClick1}>click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
