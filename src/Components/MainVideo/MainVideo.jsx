import React from "react";
import "./MainVideo.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function MainVideo() {
  const [photos, setPhotos] = React.useState([]);
  const { user_id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos/" + user_id
      );

      const data = await res.json();

      if (data) {
        setPhotos(data);
      }
    })();
  }, []);

  return (
    <div className="d-flex flex-column align-items-start">
      <ul className="p-5 d-flex videolar list-unstyled">
        {photos && (
          <li className="videolar__item " key={photos.id}>
            <NavLink className="videolar__link  " to={`/video/` + user_id}>
              <img
                className="videolar__img"
                src={photos.url}
                alt="Img"
                width={340}
                height={250}
              />
              <p className="img-title">{photos.title}</p>
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
export default MainVideo;
