import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css';
import {PostDataType} from "../../../index";

type PostData = {
   postsData: PostDataType[]
}

export const MyPosts = (props: PostData) => {

   const postElement = props.postsData.map(p => <Post title={p.title} likes={p.likes}/>)

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