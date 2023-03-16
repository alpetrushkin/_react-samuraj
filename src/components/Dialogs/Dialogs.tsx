import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialog}>
            <div className={s.item}>Andrew</div>
            <div className={s.item}>Dmitry</div>
            <div className={`${s.item} ${s.active}`}>Sasha</div>
            <div className={s.item}>Sveta</div>
            <div className={s.item}>Valera</div>
            <div className={s.item}>Viktor</div>
         </div>
         <div className={s.message}>
            <div className={s.messageItem}>
               I am a normal popover and
            </div>
            <div className={s.messageItem}>
               Can have text and everything
            </div>
            <div className={s.messageItem}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
         </div>
      </div>
   );
};
