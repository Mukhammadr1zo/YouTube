import React from "react";
import { useParams } from "react-router-dom";
import Notifications from "../../Assets/images/notification.svg";
import IconButton from "@mui/material/IconButton";
import "../Chanel/Chanel.scss";

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
    <div>
      {users && (
        <div className="my-5 profile ms-4 d-flex justify-content-between">
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
    </div>
  );
};

export default Chanel;
