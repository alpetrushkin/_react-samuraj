import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileType = {
   post: PostType[]
   addPost: (title: string) => void
}

export const Profile: React.FC<ProfileType> = ({post, addPost}) => {
   return (
      <main>
         <ProfileInfo/>
         <MyPosts post={post} addPost={addPost}/>
      </main>
   );
};
