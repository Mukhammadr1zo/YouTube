import React from "react";
import "./Recomended.scss";
import { NavLink } from "react-router-dom";

function Videos() {
  const [user, setUser] = React.useState([]);

  let photos = user.length > 0 && user.slice(1, 4);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/");

      const data = await res.json();

      if (data) {
        setUser(data);
      }
    })();
  }, []);

  return (
    <div className="d-flex flex-column align-items-start">
      <h3 className="p-0 ms-5 recomend-header">Recomended</h3>
      <ul className="p-5 d-flex videolar list-unstyled">
        {photos?.length > 0 &&
          photos.map((photo) => (
            <li className="videolar__item " key={photo.id}>
              <NavLink className="videolar__link  " to={`/chanel`}>
                <img
                  className="videolar__img"
                  src={photo.url}
                  alt="Img"
                  width={340}
                  height={250}
                />
                <p className="img-title">{photo.title}</p>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Videos;
