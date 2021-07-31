import React from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterVideos/MonsterVideosCon.scss";
import homeHeaderVideo from "../../../../Assets/homeHeaderVideo.mp4";
import videoImg1 from "../../../../Assets/videoImg1.webp";
import videoImg2 from "../../../../Assets/videoImg2.webp";
import videoImg3 from "../../../../Assets/videoImg3.webp";
import videoImg4 from "../../../../Assets/videoImg4.webp";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function MonsterVideosCon() {
  return (
    <div className='monsterVideosCon'>
      <div className='homeSecond__line'></div>
      <h1>Videos</h1>
      <div className='monsterVideos__container'>
        {" "}
        <div className='monsterVideos__left'>
          <video controls>
            <source src={homeHeaderVideo} type='video/mp4' />
          </video>
          <div className='monsterVideosLeft__row'>
            <div
              className='monsterBgVideo'
              style={{ backgroundImage: `url(${videoImg1})` }}>
              <button>
                <PlayArrowIcon />
              </button>
            </div>
            <div
              className='monsterBgVideo'
              style={{ backgroundImage: `url(${videoImg2})` }}>
              <button>
                <PlayArrowIcon />
              </button>
            </div>
            <div
              className='monsterBgVideo'
              style={{ backgroundImage: `url(${videoImg3})` }}>
              <button>
                <PlayArrowIcon />
              </button>
            </div>
            <div
              className='monsterBgVideo'
              style={{ backgroundImage: `url(${videoImg4})` }}>
              <button>
                <PlayArrowIcon />
              </button>
            </div>
          </div>
        </div>
        <div className='monsterVideos__right'>
          <div className='monsterVidRight__header'></div>
          <div className='monsterVidRight__other'>
            <h3>Monster Arena: World</h3>
            <p>
              Welcome to a new world! In Monster Arnea: World the latest
              installment in the series, you can enjoy the ultimate hunting
              experience, using everything at your disposal to hunt monsters in
              a new world teeming with surprises and excitement.
            </p>
            <div>
              <h4>Release Date: </h4>
              <span>20/05/2020</span>
            </div>
            <div>
              <h4>Publisher: </h4>
              <span>Battle Games</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonsterVideosCon;
