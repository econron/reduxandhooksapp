import React, { useState } from 'react';

// 主目的：name, priceではなくstate1つで管理する

const App = props => {
  const [state, setState] = useState(props);
  // オブジェクト方式で渡す　理由：オブジェクトで渡しているから。
  const { name, price } = state;

  // spread構文を利用することで、そのほかの引数は値をそのままにできる。（公式DOC解説より）
  return (
  <>
    <p>現在の{name}は{price}円です。</p>
    <div>
      <button onClick={() => setState({...state, price : price + 1})}>+1</button>
      <button onClick={() => setState({...state, price : price - 1})}>-1</button>
      <button onClick={() => setState(props)}>RESET</button>
      <input value={name} onChange={e => setState({...state, name : e.target.value})} />
    </div>
  </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000
};

export default App;
