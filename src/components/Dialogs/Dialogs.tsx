import React from 'react';
import s from './Dialogs.module.css';
import {MessageItem} from "./Message/MessageItem";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType, MessageType} from "../../index";

type DialogsGlobalPropsType = {
   message: MessageType[]
   dialogs: DialogsType[]
}

export const Dialogs: React.FC<DialogsGlobalPropsType> = ({message, dialogs}) => {
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
