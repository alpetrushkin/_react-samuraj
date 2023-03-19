import React from 'react';
import s from './Dialogs.module.css';
import {MessageItem} from "./Message/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";

export const Dialogs: React.FC<DialogsPageType> = ({dialogs, message}) => {

   const dialogElement = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
   const messageElement = message.map(m => <MessageItem id={m.id} message={m.message} avatar={m.avatar}/>)

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
