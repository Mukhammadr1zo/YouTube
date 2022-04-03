import React from "react";
import "./Videos.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Videos() {
  const [user, setUser] = React.useState([]);
  const { user_id } = useParams();

  let photos = user.length > 0 && user.slice(1, 5);

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
    <ul className="p-5 d-flex videolar list-unstyled">
      {photos?.length > 0 &&
        photos.map((photo) => (
          <li className="videolar__item " key={photo.id}>
            <Link className="videolar__link  " to={"/chanel/" + photo.id}>
              <img
                className="videolar__img"
                src={photo.thumbnailUrl}
                alt="Img"
                width={250}
                height={150}
              />
              <p className="img-title ">{photo.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
export default Videos;
