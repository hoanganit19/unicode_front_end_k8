import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    });

    setCount((prevCount) => {
      console.log(prevCount);
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount(count - 1);
    //count chưa nhận giá trị mới
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
