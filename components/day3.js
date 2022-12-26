// *****hooks
// 1.Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks. You end up with less code. They help you to use best practices.
// 2.
import React,{ useState } from "react";

function App() {
  return (<Counter defval={1}/>);
}
function Counter(props) {
  const [count, setCount] = useState(props.defval);
  return (
    <div>
  
          Count: {count}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}