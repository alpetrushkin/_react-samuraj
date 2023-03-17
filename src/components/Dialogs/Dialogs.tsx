import React from 'react';
import s from './Dialogs.module.css';
import {MessageItem} from "./Message/MessageItem";
import {DialogItem, DialogsType} from "./DialogItem/DialogItem";

export const Dialogs = () => {
   const dialogs: DialogsType[] = [
      {id: 1, name: 'Andrew'},
      {id: 2, name: 'Dmitry'},
      {id: 3, name: 'Sasha'},
      {id: 4, name: 'Sveta'},
      {id: 5, name: 'Valera'},
      {id: 6, name: 'Viktor'}
   ]

   type MessageType = {
      id: number
      message: string
   }
   const message: MessageType[] = [
      {id: 1, message: 'I am a normal popover and'},
      {id: 2, message: 'Yo-yo!!!'},
      {id: 3, message: 'Hi my name is Alex!'},
      {id: 4, message: 'Yo'}
   ]

   // const dialogElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

   return (
      <div className={s.dialogs}>
         <div className={s.dialog}>
            <DialogItem dialogs={dialogs} />
         </div>
         <div className={s.message}>
            <MessageItem message={message} />
         </div>
      </div>
   );
};
