import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export type PostDataType = {
   id: number
   title: string
   likes: number
}

const postData: PostDataType[] = [
   {id: 1, title: 'Hi hi', likes: 200},
   {id: 2, title: 'yo-yo-yo', likes: 75}
]

export type MessageType = {
   id: number
   message: string
}
const message: MessageType[] = [
   {id: 1, message: 'I am a normal popover and'},
   {id: 2, message: 'Yo-yo!!!'},
   {id: 3, message: 'Hi my name is Alex!'},
   {id: 4, message: 'Yo2222'},
   {id: 5, message: 'Hello World!!!!!!!'}
]

export type DialogsType = {
   id: number
   name: string
}

const dialogs: DialogsType[] = [
   {id: 1, name: 'Andrew'},
   {id: 2, name: 'Dmitry'},
   {id: 3, name: 'Sasha'},
   {id: 4, name: 'Sveta'},
   {id: 5, name: 'Valera'},
   {id: 6, name: 'Viktor'}
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App postData={postData}  message={message} dialogs={dialogs}/>
  </BrowserRouter>
);
