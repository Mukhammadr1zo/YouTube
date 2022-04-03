import React from "react";
import "./Subscriptions.scss";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function Subscriptions() {
  const [users, setUsers] = React.useState({});
  const { user_id } = useParams();
  React.useEffect(() => {
    const users = async () => {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      setUsers(data?.data);
    };
    users();
  }, []);

  return (
    <div className="subcriptions">
      <h2 className="subcriptions__header">Recomended Chanel</h2>
      <ul className="list-unstyled lista">
        {users.length > 0 &&
          users?.map((user) => (
            <li key={user.id} className="subcriptions__item ">
              <Link className="subcriptions__link" to={"/chanel/" + user.id}>
                <img
                  className="subcriptions__img"
                  src={user.avatar}
                  alt="Img"
                  width={26}
                  height={26}
                />
                {user.first_name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Subscriptions;
