import React, { useState } from 'react';

import { 
  CREATE_EVENT, 
  DELETE_ALL_EVENTS, 
} 
from '../actions';
// 引数として渡す場合、{}　の中に値を渡していく。
const EventForm = ({ state, dispatch }) => {

    // useReducerを呼び出した時点で初期化されている。
    // よって、app.jsで呼び出しても値が生成されない。
    // 同じstateを参照するように改修する。
    // const [state, dispatch] = useReducer(reducer, []); 
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

        // stateに配列として保存後、表示する値を初期化。
        setTitle('');
        setBody('');
    };


    const deleteAllEvents = e => {
        e.preventDefault();
        dispatch({
          type: DELETE_ALL_EVENTS
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