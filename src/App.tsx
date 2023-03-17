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
import {DialogsType, MessageType, PostDataType} from "./index";

type GlobalPropsType = {
   postData: PostDataType[]
   message: MessageType[]
   dialogs: DialogsType[]
}

const App: React.FC<GlobalPropsType> = ({message, postData, dialogs}) => {

   return (
      <div className="app-wrapper">
         <Header/>
         <Navbar/>
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/dialogs/*" element={<Dialogs message={message} dialogs={dialogs}/>}/>
               <Route path="/profile" element={<Profile postsData={postData}/>}/>
               <Route path="/news" element={<News/>}/>
               <Route path="/music" element={<Music/>}/>
               <Route path="/settings" element={<Settings/>}/>
            </Routes>
         </div>
      </div>
   );
}

export default App;
