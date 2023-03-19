import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";

export const DialogItem: React.FC<DialogsType> = ({id, name}) => {
   return (
      <div className={s.dialogsElement}>
         <NavLink to={"/dialogs/" + id} className={({isActive}) => (isActive ? s.active : s.item)}>{name}</NavLink>
      </div>
   )
}