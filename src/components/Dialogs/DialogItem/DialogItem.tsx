import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogsType = {
   id: number
   name: string
}

type DialogsPropsType = {
   dialogs: DialogsType[]
}

export const DialogItem: React.FC<DialogsPropsType> = ({dialogs}) => {
   const dialogElement = dialogs.map(d => {
      return (
         <div>
            <NavLink
               to={"/dialogs/" + d.id}
               className={({isActive}) => (isActive ? s.active : s.item)}>{d.name}</NavLink>
         </div>
      )
   })

   return (
      <div className={s.item}>
         {dialogElement}
      </div>
   )
}
