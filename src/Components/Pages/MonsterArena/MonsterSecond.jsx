import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterSecond.scss";
import MonsterVideoCard from "./MonsterVideoCard";
import videoImg1 from "../../../Assets/videoImg1.webp";
import videoImg2 from "../../../Assets/videoImg2.webp";
import videoImg3 from "../../../Assets/videoImg3.webp";
import videoImg4 from "../../../Assets/videoImg4.webp";
import Carousel from "react-elastic-carousel";

function MonsterSecond() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='monsterSecond'>
      <div className='homeSecond__line'></div>
      <h1>Videos</h1>
      <div className='monsterSecond__row'>
        <Carousel breakPoints={breakPoints}>
          <MonsterVideoCard
            bgImg={videoImg1}
            title='Monster Fight: Out now on PS5'
          />
          <MonsterVideoCard
            bgImg={videoImg2}
            title='Purchase the Defender a armor at the Armory'
          />
          <MonsterVideoCard bgImg={videoImg3} title='Unlock new features' />
          <MonsterVideoCard
            bgImg={videoImg4}
            title='Purchase the Defender a armor at the Armory'
          />
          <MonsterVideoCard
            bgImg={videoImg1}
            title='Monster Fight: Out now on PS5'
          />
          <MonsterVideoCard
            bgImg={videoImg2}
            title='Purchase the Defender a armor at the Armory'
          />
          <MonsterVideoCard bgImg={videoImg3} title='Unlock new features' />
          <MonsterVideoCard
            bgImg={videoImg4}
            title='Purchase the Defender a armor at the Armory'
          />
        </Carousel>
      </div>
    </div>
  );
}

export default MonsterSecond;
