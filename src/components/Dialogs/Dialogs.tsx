import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
   name: string
   id: number
}

const DialogItem: React.FC<DialogsPropsType> = ({name, id}) => {
   return (
      <div className={s.item}>
         <NavLink to={"/dialogs/" + id} className={({isActive}) => (isActive ? s.active : s.item)}>{name}</NavLink>
      </div>
   )
}

type MessageItemPropsType = {
   message: string
}

const MessageItem: React.FC<MessageItemPropsType> = ({message}) => {
   return (
      <div className={s.messageItem}>
         {message}
      </div>
   )
}

export const Dialogs = () => {
   type DialogsDataType = {
      id: number
      name: string
   }

   const dialogsData: DialogsDataType[] = [
      {id: 1, name: 'Andrew'},
      {id: 2, name: 'Dmitry'},
      {id: 3, name: 'Sasha'},
      {id: 4, name: 'Sveta'},
      {id: 5, name: 'Valera'},
      {id: 6, name: 'Viktor'}
   ]

   type MessageDataType = {
      id: number
      message: string
   }

   const messageData: MessageDataType[] = [
      {id: 1, message: 'I am a normal popover and'},
      {id: 2, message: 'Yo-yo!!!'},
      {id: 3, message: 'Hi my name is Alex!'},
      {id: 4, message: 'Yo'}
   ]

   const dialogElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
   const messageElement = messageData.map(m => <MessageItem message={m.message}/>)

   return (
      <div className={s.dialogs}>
         <div className={s.dialog}>
            {dialogElement}
         </div>

         <div className={s.message}>
            {messageElement}
         </div>
      </div>
   );
};
