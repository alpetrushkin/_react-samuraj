import React from 'react';
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
   return (
      <div className={s.profileInfo}>
         <img className={s.profileImg}
              src="https://sun9-30.userapi.com/impf/c858120/v858120218/1bb4b6/5wfzdFcNKM4.jpg?size=0x0&quality=90&proxy=1&sign=e3d64951cee3a21f5b33303d7a390b5b&c_uniq_tag=G3n5h_pZ-UyW6rbD90h9JpEh8J3mFGNMtJLC7gEhQXc&type=video_thumb"
              alt="images"
         />
         <div className={s.profileAvatar}>ava + description</div>
      </div>
   );
};
