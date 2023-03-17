import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css';

export const MyPosts = () => {
   type PostDataType = {
      id: number
      title: string
      likes: number
   }

   const postData: PostDataType[] = [
      {id: 1, title: 'Hi hi', likes: 20},
      {id: 2, title: 'yo-yo-yo', likes: 55}
   ]

   const postElement = postData.map(p => <Post title={p.title} likes={p.likes}/>)

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
         {postElement}
      </div>
   );
};