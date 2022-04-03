import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Videos from "../../Components/Videos/Videos";
import Background from "../../Assets/images/background.png";
import { useParams } from "react-router-dom";
import Notifications from "../../Assets/images/notification.svg";
import IconButton from "@mui/material/IconButton";
import MainVideo from "../../Components/MainVideo/MainVideo";
import ChanelVideos from "./ChanelVideos";
import RecSubscriptions from "../../Components/Subscriptions/RecSubscriptions";
import "./Chanel.scss";

const Chanel = () => {
  const [users, setUsers] = React.useState({});
  const { user_id } = useParams();
  React.useEffect(() => {
    const users = async () => {
      const res = await fetch("https://reqres.in/api/users/ " + user_id);
      const data = await res.json();
      setUsers(data?.data);
    };
    users();
  }, []);

  return (
    <div className="d-flex">
      <Navbar />
      <div className="ms-4">
        <img className="mt-4 back-img" src={Background} alt="Background" />
        {users && (
          <div className="my-5 profile ms-4">
            <div className="profile">
              <img
                className="profile__img"
                src={users.avatar}
                alt="Avatar"
                width={80}
                height={80}
              />
              <div className="profile__box">
                <h2 className="profile-title">
                  {" "}
                  {users.first_name + " " + users.last_name}
                </h2>
                <p className="profile-follower">243.4K Subscirbed</p>
              </div>
            </div>
            <div className="btn-box">
              <IconButton>
                <img src={Notifications} alt="Notifications" />
              </IconButton>
              <button className="subs-btn">Subscribe 2.3M</button>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-around video-box">
          <MainVideo />
          <RecSubscriptions />
        </div>

        {users && (
          <div className="d-flex align-flex-start ">
            <h3 className="chanel-username">
              {users.first_name + " " + users.last_name} videos
            </h3>
          </div>
        )}

        <ChanelVideos />
      </div>
    </div>
  );
};

export default Chanel;
