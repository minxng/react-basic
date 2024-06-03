import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <>
      <span className="title">
        Total Count : {count} {count > 10 ? "🔥" : "🧊"}{" "}
      </span>
      <Counter total={count} onClick={handleClick} />
      <Counter total={count} onClick={handleClick} />
    </>
  );
}

export default AppCounter;
