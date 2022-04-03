import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import "./Components/Container/Container.scss";
import Home from "./Pages/Home/Home";
import Trending from "./Pages/Trending/Trending";
import Subscription from "./Pages/Subscription/Subscription";
import Library from "./Pages/Library/Library";
import History from "./Pages/History/History";
import WatchLater from "./Pages/WatchLater/WatchLater";
import Musics from "./Pages/Musics/Musics";
import Games from "./Pages/Games/Games";
import More from "./Pages/More/More";
import Likes from "./Pages/Likes/Likes";
import Fav from "./Pages/Fav/Fav";
import Profile from "./Pages/Profile/Profile";
import Chanel from "./Pages/Chanel/Chanel";
import Videoplayer from "./Pages/VideoPlayer/VideoPlayer";

function AuthenticatedApp() {
  return (
    <div className="App containeer">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/library" element={<Library />} />
        <Route path="/history" element={<History />} />
        <Route path="/watch" element={<WatchLater />} />
        <Route path="/music" element={<Musics />} />
        <Route path="/games" element={<Games />} />
        <Route path="/more" element={<More />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/favorites" element={<Fav />} />
        <Route path="/chanel/:user_id" element={<Chanel />} />
        <Route path="/video/:user_id" element={<Videoplayer />} />

        <Route path="*" element={<h1>Page Not Found 404 Error</h1>}></Route>
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
