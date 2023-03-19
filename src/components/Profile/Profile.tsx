import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export const Profile: React.FC<ProfilePageType> = ({post}) => {
   return (
      <main>
         <ProfileInfo/>
         <MyPosts post={post}/>
      </main>
   );
};
