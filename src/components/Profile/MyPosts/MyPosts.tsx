import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
   return (
      <div>My posts
         <div>
            <textarea></textarea>
            <button>Send</button>
         </div>
        <Post title={'Hi'} likes={20}/>
        <Post title={'yo-yo-yo'}/>
        <Post title={'I live Russia'} likes={35}/>
      </div>
   );
};