import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterThird.scss";
import Carousel from "react-elastic-carousel";
import monsterImg1 from "../../../Assets/monsterImg1.webp";
import monsterImg2 from "../../../Assets/monsterImg2.webp";
import monsterImg3 from "../../../Assets/monsterImg3.webp";
import monsterImg4 from "../../../Assets/monsterImg4.webp";

function MonsterThird() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='monsterThird'>
      <div className='homeSecond__line'></div>
      <h1>Images</h1>
      <div className='monsterThird__row'>
        <Carousel breakPoints={breakPoints}>
          <img src={monsterImg1} alt='' />
          <img src={monsterImg2} alt='' />
          <img src={monsterImg3} alt='' />
          <img src={monsterImg4} alt='' />
          <img src={monsterImg1} alt='' />
          <img src={monsterImg2} alt='' />
          <img src={monsterImg3} alt='' />
          <img src={monsterImg4} alt='' />
        </Carousel>
      </div>
    </div>
  );
}

export default MonsterThird;
