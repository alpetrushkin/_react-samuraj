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
   ]

   type MessageDataType = {
      id: number
      message: string
   }

   const messageData: MessageDataType[] = [
      {id: 1, message: 'I am a normal popover and'},
      {id: 2, message: 'Yo-yo!!!'},
   ]

   return (
      <div className={s.dialogs}>
         <div className={s.dialog}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            {/*<DialogItem name="Sasha" id={3}/>*/}
            {/*<DialogItem name="Sveta" id={4}/>*/}
            {/*<DialogItem name="Valera" id={5}/>*/}
            {/*<DialogItem name="Viktor" id={6}/>*/}
         </div>

         <div className={s.message}>
           <MessageItem message={messageData[0].message}/>
           <MessageItem message={messageData[1].message}/>
           {/*<MessageItem message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>*/}
           {/*<MessageItem message="Hi my name is Alex!"/>*/}
           {/*<MessageItem message="Yo"/>*/}
           {/*<MessageItem message="Yo-yo!!!"/>*/}
         </div>
      </div>
   );
};
