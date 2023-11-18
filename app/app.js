import React, { useState } from 'react';
import Counter from './components/Counter';
import GitHubLink from './components/GitHubLink';
import ProductTable from './components/ProductTable';

const App = () => {
  const [totalIncrement, setTotalIncrement] = useState(0);

  const handleIncrement = (increment) => {
    setTotalIncrement(totalIncrement + increment);
  };

  return (
    <div>
      <Counter step={1} backgroundColor="lightblue" onIncrement={handleIncrement} />
      <Counter step={2} backgroundColor="lightcoral" onIncrement={handleIncrement} />
      <GitHubLink />
      <ProductTable />
      <p>Total Increment: {totalIncrement}</p>
    </div>
  );
};

export default App;