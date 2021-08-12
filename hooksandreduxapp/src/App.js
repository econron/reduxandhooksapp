import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);
  const reset = () => setCount(0);
  const divisionFour = () => {
    if(count % 4 !== 0) return;
    setCount(count / 4);
  }


  return (
  <>
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>RESET</button>
      <button onClick={divisionFour}>４の倍数の時だけ４で割る</button>
    </div>
    <div>
      count: {count}
    </div>
  </>
  );
};

export default App;
