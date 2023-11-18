import React, { useState } from 'react';

const Counter = ({ step, backgroundColor, onIncrement }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count + step > 10) {
      setCount(0);
    } else {
      setCount(count + step);
    }
    onIncrement(step);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '10px', margin: '10px' }}>
      <p>Counter (Increment by {step}): {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;