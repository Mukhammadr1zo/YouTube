import React from "react";
import "../../Components/Videos/Videos.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Chanel.scss";

function Videos() {
  const [user, setUser] = React.useState([]);
  const { user_id } = useParams();

  let photos = user.length > 0 && user.slice(1, 10);

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
    <ul className="p-5 d-flex flex-column videolar list-unstyled">
      {photos?.length > 0 &&
        photos.map((photo) => (
          <li className="videolar__item " key={photo.id}>
            <Link className="videolar__link  " to={"/video/" + photo.id}>
              <img
                className="videolar__img"
                src={photo.thumbnailUrl}
                alt="Img"
                width={250}
                height={150}
              />
              <p className="img-title text-decoration-none">{photo.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
export default Videos;
