import React from 'react';
import {MessageType} from "../../../redux/state";
import s from './MessageItem.module.css';

export const MessageItem: React.FC<MessageType> = ({message, avatar, id}) => {
   return (
      <div className={s.messageElement}>
         <img className={s.avatar} src={avatar} alt="avatar"/>
         {message}
      </div>
   )
}
