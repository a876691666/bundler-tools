import { answer } from "./lib";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
  }, []);
  return <div>count: {count}</div>;
};
ReactDOM.render(<App />, document.getElementById("root"));

console.log(ReactDOM);

export default () => {
  return answer;
};

export const a = (a) => {
  return answer + a;
}