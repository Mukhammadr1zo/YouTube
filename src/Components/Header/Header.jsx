import React from "react";
import "./Header.scss";
import Hamburger from "../../Assets/images/Hamburger.svg";
import Logo from "../../Assets/images/Logo.svg";
import Camera from "../../Assets/images/camera.svg";
import TypeOfView from "../../Assets/images/TypeOfView.svg";
import Notification from "../../Assets/images/notification.svg";
import UserImg from "../../Assets/images/userImg.svg";
import { NavLink, Link } from "react-router-dom";
import { Context as SideBarContext } from "../../Context/SideBar";
import IconButton from "@mui/material/IconButton";

function Header() {
  const { menu, setMenu } = React.useContext(SideBarContext);
  const handleClick = () => {
    menu.current.classList.toggle("close");
  };
  return (
    <header className="header">
      <IconButton onClick={handleClick} className="header__sidebar">
        <img className="header__logo" src={Hamburger} alt="menu" />
      </IconButton>
      <Link to={"/"}>
        <img src={Logo} width={116} height={25} />
      </Link>
      <input
        className="header__search"
        type="text"
        placeholder="Search"
        autoComplete="off"
      />
      <div className="header-right-box">
        <IconButton>
          <Link to={"/"}>
            <img src={Camera} />
          </Link>
        </IconButton>
        <IconButton>
          <Link to={"/"}>
            <img src={TypeOfView} />
          </Link>
        </IconButton>
        <IconButton>
          <Link to={"/"}>
            <img src={Notification} />
          </Link>
        </IconButton>
      </div>
      <Link to={"/"}>
        <img src={UserImg} alt="user picture" width={40} height={40} />
      </Link>
    </header>
  );
}

export default Header;
