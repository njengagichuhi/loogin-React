import React from "react";
import { useState } from "react";
const Colors = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(prevCount => prevCount + 1);
  return (
    <div className="container">
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );

};

export default Colors;
