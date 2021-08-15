import React, { useState, useReducer, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Events from './Events';
import EventForm from './EventForm.js';
import AppContext from '../contexts/AppContext';

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
