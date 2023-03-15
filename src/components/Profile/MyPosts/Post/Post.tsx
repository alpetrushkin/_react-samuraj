import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
   title: string
   likes?: number
}

export const Post:React.FC<PostPropsType> = ({title, likes}) => {
   return (
      <div className={s.post}>
         <img src="https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg" alt="avatar"/>
         <span className={s.item}>{title} </span>
         <b>like {likes}</b>
      </div>
   );
};