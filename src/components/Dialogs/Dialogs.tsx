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
   return (
      <div className={s.dialogs}>
         <div className={s.dialog}>
            <DialogItem name="Andrew" id={1}/>
            <DialogItem name="Dmitry" id={2}/>
            <DialogItem name="Sasha" id={3}/>
            <DialogItem name="Sveta" id={4}/>
            <DialogItem name="Valera" id={5}/>
            <DialogItem name="Viktor" id={6}/>
         </div>

         <div className={s.message}>
           <MessageItem message="I am a normal popover and"/>
           <MessageItem message="Can have text and everything"/>
           <MessageItem message="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
           <MessageItem message="Hi my name is Alex!"/>
           <MessageItem message="Yo"/>
           <MessageItem message="Yo-yo!!!"/>
         </div>
      </div>
   );
};
