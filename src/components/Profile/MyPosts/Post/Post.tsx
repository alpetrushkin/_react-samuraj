import React from 'react';
import s from './Post.module.css'

export const Post = () => {
   return (
      <div className={s.post}>
         <img src="https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg" alt="avatar"/>
         <span className={s.item}>Post 1</span>
      </div>
   );
};