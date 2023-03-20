import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css';
import {PostType, ProfilePageType} from "../../../redux/state";

type MyPostType = {
   post: PostType[]
   addPost: (title: string) => void
}

export const MyPosts: React.FC<MyPostType> = ({post, addPost}) => {
   const [title, setTitle] = React.useState('');

   const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTitle(event.currentTarget.value)
   }

   const onClickAddHandler = () => {
     addPost(title)
      setTitle('')
   }

   const postElement = post.map(p => <Post title={p.title} likes={p.likes} id={p.id}/>)

   return (
      <div className={s.myPost}>
         <h3>My posts</h3>
         <div className={s.myPostFormAdd}>
            <div>
               <textarea value={title} onChange={onChangeHandler}></textarea>
            </div>
            <div>
               <button onClick={onClickAddHandler}>Send</button>
            </div>
         </div>
         {postElement}
      </div>
   );
};