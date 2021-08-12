import React, { useEffect, useState } from 'react';

const App = props => {
  // 今更だが、初期値かしたpropsをstateに割り当てているだけ。
  const [state, setState] = useState(props);
  const { name, price } = state;

  // 入門useEffect
  useEffect(() => {console.log('this is called EveryTime'); });
  // 空の配列を渡すと1回だけレンダー後に呼び出される。
  useEffect(() => {console.log('this is called 1 time.')}, []);
  useEffect(() => {console.log('this is called on changing input name')}, [name]);
  useEffect(() => {console.log('this is called on changing price.')}, [price]);

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
