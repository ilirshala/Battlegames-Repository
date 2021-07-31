import React, { useRef, useState, useCallback } from "react";
import "../../../Styles/Pages/Home/HomeHeader.scss";
import MyButton from "../../Shared/MyButton";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import PauseIcon from "@material-ui/icons/Pause";
import headerBgVideo from "../../../Assets/homeHeaderVideo.mp4";
import { useHistory } from "react-router";

function HomeHeader({ poster, bgVideon, title }) {
  const history = useHistory();
  const handle = useFullScreenHandle();

  const [video, setVideo] = useState(false);
  const vidRef = useRef(null);

  const playVideo = () => {
    vidRef.current.play();
    setVideo(!video);
  };
  const pauseVideo = () => {
    vidRef.current.pause();
    setVideo(!video);
  };

  function toggleFullscreen() {
    let elem = document.querySelector("video");

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <div className='homeHeader'>
      <div className='homeHeader__all'>
        <div className='bgVideo'>
          <video
            id='full-screenVideo'
            ref={vidRef}
            id='bgVideo'
            poster={poster}>
            <source src={bgVideon} type='video/mp4' />
          </video>
        </div>
        <div className='homeHeader__container'>
          <div className='homeHeader__left'>
            <h4>NEW</h4>
            <h1>{title}</h1>
            <p>
              You can enjoy the ultimate hunting experience, using everything at
              your disposal to hunt monsters.
            </p>
            <div className='homeHeader__buttons'>
              <MyButton name='Buy now' />
              <MyButton
                name='LEARN MORE'
                className='learnButton'
                onClick={() => history.push("/monsterArena")}
              />
            </div>
            <div className='header__rating'>
              <div className='stars'>
                <p>Rating</p>
                <h5>
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarOutlinedIcon />
                  <StarHalfOutlinedIcon />
                  4.5
                </h5>
              </div>
              <div className='crossPlatform'>
                <h6>Cross-Platform</h6>
              </div>
              <div className='crossPlatform'>
                <h6>Multiplayer</h6>
              </div>
            </div>
          </div>
          <div
            className='homeHeader__right'
            id='right'
            onDoubleClick={toggleFullscreen}>
            <button
              onClick={playVideo}
              style={{ display: video ? "none" : "" }}>
              <PlayArrowIcon />
            </button>
            <button
              style={{ display: video ? "block" : "" }}
              id='pauseButton'
              onClick={pauseVideo}>
              <PauseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
