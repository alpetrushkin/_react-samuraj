import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsPageType, FriendPageType, ProfilePageType} from "./redux/state";

type GlobalStateType = {
   dialogsPage: DialogsPageType
   profilePage: ProfilePageType
   friendPage: FriendPageType
   addPost: (title: string) => void
}

const App: React.FC<GlobalStateType> = ({dialogsPage, profilePage, friendPage, addPost}) => {
   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar friend={friendPage.friend}/>
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/dialogs/*"
                      element={<Dialogs message={dialogsPage.message} dialogs={dialogsPage.dialogs}/>}/>
               <Route path="/profile" element={<Profile post={profilePage.post} addPost={addPost}/>}/>
               <Route path="/news" element={<News/>}/>
               <Route path="/music" element={<Music/>}/>
               <Route path="/settings" element={<Settings/>}/>
            </Routes>
         </div>
      </div>
   );
}

export default App;
