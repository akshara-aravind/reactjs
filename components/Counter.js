
import React,{ useState } from "react";
export const Counter=()=>{
  const [count, setCount] = useState(0);
  return (
    <div>
  
          Count: {count}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}