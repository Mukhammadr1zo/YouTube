import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Main.scss";
import Videos from "../../Components/Videos/Videos";
import Recommended from "../../Components/Recomended/Recomended";
import { useParams } from "react-router-dom";

function Home() {
  const [users, setUsers] = React.useState({});
  const { user_id } = useParams();
  React.useEffect(() => {
    const users = async () => {
      const res = await fetch("https://reqres.in/api/users?page=1" + user_id);
      const data = await res.json();
      setUsers(data?.data);
    };
    users();
  }, []);

  return (
    <div className="home-chanel d-flex ">
      <Navbar />
      <ul className="list-unstyled list home">
        {users.length > 0 &&
          users?.map((user) => (
            <li key={user.id} className="home-chanel__item ">
              <Link
                className="home-chanel__link d-flex align-items-center"
                to={"/chanel/" + user.id}
              >
                <img
                  className="home-chanel__img"
                  src={user.avatar}
                  alt="Img"
                  width={40}
                  height={40}
                />
                <h3 className="home-chanel__name">
                  {user.first_name} {user.last_name}
                </h3>
              </Link>
              <Videos />
            </li>
          ))}

        <Recommended />
      </ul>
    </div>
  );
}

export default Home;
