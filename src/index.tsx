import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from './redux/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App
       profilePage={state.profilePage}
       dialogsPage={state.dialogsPage}
       friendPage={state.friendPage}
       addPost={addPost}
    />
  </BrowserRouter>
);
