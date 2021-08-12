import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Event from './Event';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []); 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addEvent = e => {
      // リロードをさせない
      e.preventDefault();

      // addEvent起動時、reducer/index.jsの処理を実行する上で必要な値をパスする。
      dispatch({
          // reducerのactionに渡す引数一覧
          // typeは必須
          type: 'CREATE_EVENT',
          title,
          body
      });

      // stateに配列として保存後、表示する値を初期化。
      setTitle('');
      setBody('');
  };
    
  return(
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
          <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>タイトル</th>
                  <th>ボディー</th>
              </tr>
          </thead>
          <tbody>
              { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
      </table>
      </>
  );
};

export default App;
