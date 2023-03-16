import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css';

export const MyPosts = () => {
   return (
      <div className={s.myPost}>
         <h3>My posts</h3>
         <div className={s.myPostFormAdd}>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Send</button>
            </div>
         </div>
        <Post title={'Hi'} likes={20}/>
        <Post title={'yo-yo-yo'}/>
        <Post title={'I live Russia'} likes={35}/>
      </div>
   );
};