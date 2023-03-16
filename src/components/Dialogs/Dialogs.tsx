import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialog}>
            <div className={s.item}>
               <NavLink to="/dialogs/1" className={({isActive}) => (isActive ? s.active : '')}>Andrew</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/dialogs/2" className={({isActive}) => (isActive ? s.active : '')}>Dmitry</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/dialogs/3" className={({isActive}) => (isActive ? s.active : '')}>Sasha</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/dialogs/4" className={({isActive}) => (isActive ? s.active : '')}>Sveta</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/dialogs/5" className={({isActive}) => (isActive ? s.active : '')}>Valera</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to="/dialogs/6" className={({isActive}) => (isActive ? s.active : '')}>Viktor</NavLink>
            </div>
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
