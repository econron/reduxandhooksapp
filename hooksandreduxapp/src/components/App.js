import React, { useState, useReducer, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Events from './Events';
import EventForm from './EventForm.js';
import AppContext from '../contexts/AppContext';

//　作成順序
// ①要件整理。状態遷移図を利用して、実装漏れをなくす試みをする。
// ②状態遷移図に基づきreducerやstateを利用して状態管理。
// ③作成したソースをコンポーネント分割。
// ④変数の状態の見通しをよくするため、contexで置き換え。

const App = () => {

  const [state, dispatch] = useReducer(reducer, []); 
  const value = useContext(AppContext);
  return(
    // AppContextをimportする
    // AppContextのProviderを呼び出す
    // 引数として、初期化したstate, dispatchを渡す
      <AppContext.Provider value={{ state, dispatch }}>
      <EventForm />
      <Events />
      </AppContext.Provider>
  );
};

export default App;
