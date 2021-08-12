import React, { useState } from 'react';

const App = props => {
  // useStateで初期値を割り当てる
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const resetAllParams = () => {
    setName(props.name);
    setPrice(props.price);
  };

  // onClick内で　() => set〇〇()　と書かないと
  // react-dom.development.js:14997 Uncaught Error: Too many re-renders. 
  // React limits the number of renders to prevent an infinite loop.
  // いまいち理由がわからない
  return (
  <>
    <p>現在の{name}は{price}円です。</p>
    <div>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={resetAllParams}>RESET</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  </>
  );
};

// 公式DOCによればdefaultPropsで、
// undefined(nullはなし)のprops.x(xは名付けたフィールド名)に値を割り当てる。
App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
