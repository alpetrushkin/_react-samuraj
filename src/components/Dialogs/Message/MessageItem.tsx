import React from 'react';
import s from "../Dialogs.module.css";

type MessagePropsType = {
   id: number
   message: string
}

type MessageItemPropsType = {
   message: MessagePropsType[]
}

export const MessageItem: React.FC<MessageItemPropsType> = ({message}) => {
   const messageElement = message.map(m => {
      return <div className={s.messageItem}>{m.message}</div>
   })

   return (
      <>{messageElement}</>
   )
}
