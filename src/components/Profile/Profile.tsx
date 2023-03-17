import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";

type PostType = {
   postsData: PostDataType[]
}

export const Profile = (props: PostType) => {
   return (
      <main>
         <ProfileInfo/>
         <MyPosts postsData={props.postsData}/>
      </main>
   );
};
