import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import Liked from "../../Assets/images/liked.svg";
import Unliked from "../../Assets/images/unliked.svg";
import Share from "../../Assets/images/share.svg";
import More from "../../Assets/images/moree.svg";
import IconButton from "@mui/material/IconButton";
import VideoChanel from "./VideoChanel";
import AutoPlayVideo from "../Chanel/AutoPlayVideos";
import "./VideoPlayer.scss";

function Videoplayer() {
  const [photos, setPhotos] = React.useState([]);
  const { user_id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/");

      const data = await res.json();

      if (data) {
        setPhotos(data);
      }
    })();
  }, []);

  const selectedVideo =
    photos.length > 0 && photos.find((u) => u.id === Number(user_id));
  console.log();
  return (
    <div className="d-flex">
      <Navbar />
      <div>
        <div className="d-flex flex-column align-items-start">
          <ul className="p-5 d-flex  list-unstyled">
            {selectedVideo && (
              <li className="videolar__item ">
                <div className="videolar__link ">
                  <img
                    className="videolar__img"
                    src={selectedVideo.url}
                    alt="Img"
                    width={700}
                    height={500}
                  />
                  <p className="img-titles">{selectedVideo.title}</p>
                  <div className="video-box d-flex justify-content-between align-items-center">
                    <p className="video-info">123.3K Views</p>
                    <div className="btn-box d-flex align-items-center">
                      <IconButton>
                        <div className="d-flex align-items-center">
                          <img src={Liked} alt="like" />
                          <p className="btns">133K</p>
                        </div>
                      </IconButton>
                      <IconButton>
                        <img src={Unliked} alt="like" />
                        <p className="btns">13K</p>
                      </IconButton>
                      <IconButton>
                        <img src={Share} alt="like" />
                        <p className="btns">Share</p>
                      </IconButton>
                      <IconButton>
                        <img src={More} alt="like" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
        <VideoChanel />
      </div>
      <AutoPlayVideo />
    </div>
  );
}

export default Videoplayer;
