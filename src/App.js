import React, { useState, useEffect,useRef } from "react";


export default function App() {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || [0]
  );
 

  useEffect(() => {
    const data = localStorage.getItem("count");
    setCount(JSON.parse(data));
  }, []);

  useEffect(() => {
  localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const increaseCount = () => {
   return setCount(count + 1);
  };
  const decreaseCount = () => {
    
    return setCount(count - 1);
  };
  const pos =useRef(0);
  useEffect(()=>{
    pos.current=pos.current+1;
  });



  return (
    <div className="App">
      <h1> Count {count} </h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      
      <h1>render count:{pos.current}</h1>

    </div>
  );
}