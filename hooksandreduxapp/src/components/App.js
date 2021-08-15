import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Events from './Events';
import EventForm from './EventForm.js';

const App = () => {

  const [state, dispatch] = useReducer(reducer, []); 
  return(
      <>
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch} />
      </>
  );
};

export default App;
