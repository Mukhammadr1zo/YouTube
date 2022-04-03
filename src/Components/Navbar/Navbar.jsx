import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import Home from "../../Assets/images/Home.svg";
import Trending from "../../Assets/images/trending.svg";
import Subscription from "../../Assets/images/subscription.svg";
import Library from "../../Assets/images/library.svg";
import History from "../../Assets/images/history.svg";
import WatchLater from "../../Assets/images/watch-later.svg";
import Fav from "../../Assets/images/fav.svg";
import Like from "../../Assets/images/like.svg";
import Music from "../../Assets/images/music.svg";
import Games from "../../Assets/images/games.svg";
import More from "../../Assets/images/more.svg";
import Settings from "../../Assets/images/settings.svg";
import Subscriptions from "../Subscriptions/Subscriptions";
import { Context as SideBarContext } from "../../Context/SideBar";

function Navbar() {
  const { menu, setMenu } = React.useContext(SideBarContext);
  const useRef = React.useRef();
  React.useEffect(() => {
    setMenu(useRef);
  }, [menu]);
  return (
    <section ref={useRef} className="sidebar ">
      <ul className="list-unstyled list-group p-0 sidebar__list">
        <hr />
        <li className="sidebar__item ">
          <NavLink className="sidebar__link" to={"/"}>
            <img className="sidebar__icon" alt="Home" src={Home} /> Home
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/trending"}>
            <img className="sidebar__icon" alt="Trending" src={Trending} />{" "}
            Trending
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/subscription"}>
            <img
              className="sidebar__icon"
              alt="Subscription"
              src={Subscription}
            />{" "}
            Subscriptions
          </NavLink>
        </li>
        <hr className="mt-5" />
        <li className="sidebar__item ">
          <NavLink className="sidebar__link" to={"/library"}>
            <img className="sidebar__icon" alt="Lib" src={Library} /> Library
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/history"}>
            <img className="sidebar__icon" alt="History" src={History} />{" "}
            History
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/watch"}>
            <img className="sidebar__icon" alt="Watch-Later" src={WatchLater} />{" "}
            Watch later
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/favorites"}>
            <img className="sidebar__icon" alt="favorites" src={Fav} />{" "}
            Favourites
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/likes"}>
            <img className="sidebar__icon" alt="Likes" src={Like} /> Liked
            videos
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/music"}>
            <img className="sidebar__icon" alt="Musics" src={Music} /> Music
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/games"}>
            <img className="sidebar__icon" alt="Games" src={Games} /> Games
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" to={"/more"}>
            <img className="sidebar__icon" alt="More" src={More} /> Show more
          </NavLink>
        </li>
      </ul>
      <Subscriptions />
      <NavLink className="sidebar__link sidebar__settings" to={"/settings"}>
        <img className="sidebar__settings-icon" alt="Settings" src={Settings} />
        Settings
      </NavLink>
    </section>
  );
}

export default Navbar;
