import React from 'react';
import s from './Friends.module.css';
import {FriendsElements} from "./FriendsItems/FriendsElements";
import {FriendPageType} from "../../redux/state";

export const Friends: React.FC<FriendPageType> = ({friend}) => {

   const friendsElement = friend.map(f => <FriendsElements name={f.name} avatar={f.avatar} id={f.id}/>)

   return (
      <div className={s.friends}>
         <h2>Friends</h2>
         <div className={s.friendsBox}>
            {friendsElement}
         </div>
      </div>
   );
};
