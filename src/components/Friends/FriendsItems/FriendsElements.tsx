import React from 'react';
import s from "../Friends.module.css";
import {FriendType} from "../../../redux/state";

export const FriendsElements: React.FC<FriendType> = ({name, avatar}) => {
   return (
      <div className={s.friendsElements}>
         <img className={s.friendsImg} src={avatar} alt="avatar"/>
         <p>{name}</p>

      </div>
   );
};