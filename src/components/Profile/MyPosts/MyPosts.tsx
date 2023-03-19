import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css';
import {ProfilePageType} from "../../../redux/state";

export const MyPosts: React.FC<ProfilePageType> = ({post}) => {

   const postElement = post.map(p => <Post title={p.title} likes={p.likes} id={p.id}/>)

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