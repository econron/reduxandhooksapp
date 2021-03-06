import React, { useState, useContext } from 'react';

import { 
  CREATE_EVENT, 
  DELETE_ALL_EVENTS, 
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} 
from '../actions';
import { timeCurrentIso8601 } from '../utils';

import AppContext from '../contexts/AppContext';
import App from './App';

// 引数として渡す場合、{}　の中に値を渡していく。
const EventForm = () => {
  // useContext関数によって、受け取ったstateとdispatchを再現する。
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addEvent = e => {
        e.preventDefault();
        dispatch({
          // reducerのactionに渡す引数一覧
          // typeは必須
          type: CREATE_EVENT,
          title,
          body
        });

        dispatch({
          type: ADD_OPERATION_LOG,
          description: 'イベントを作成しました。',
          operatedAt: timeCurrentIso8601
        });

        // stateに配列として保存後、表示する値を初期化。
        setTitle('');
        setBody('');
    };


    const deleteAllEvents = e => {
        e.preventDefault();
        dispatch({
          type: DELETE_ALL_EVENTS
        });
        dispatch({
          type: ADD_OPERATION_LOG,
          description: '全てのイベントを削除しました。',
          operatedAt: timeCurrentIso8601
        });
    };

    return (
        <>
        <div className="container-fluid">
          <h4>イベント作成フォーム</h4>
        </div>
        <form>
            <div className="form-group">
              <label htmlFor="formEventTitle">タイトル</label>
              <input className="form-control" id="formEventTitle" 
              value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="formEventBody">ボディー</label>
              <textarea className="form-control" id="formEventBody" 
              value={body} onChange={e => setBody(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
            <button className="btn btn-danger" onClick={deleteAllEvents}>全てのイベントを削除する</button>
        </form>
        </>
    );
}

export default EventForm;