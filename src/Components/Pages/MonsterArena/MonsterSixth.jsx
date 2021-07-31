import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterSixth.scss";
import Carousel from "react-elastic-carousel";
import { homeCardList } from "../../Shared/homeCardList";
import HomeCard from "../../Shared/HomeCard";

function MonsterSixth() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1450, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 3 },
  ];
  return (
    <div className='monsterSixth'>
      <div className='homeSecond__line'></div>
      <h1>Related Games</h1>
      <div className='monsterSixth__row'>
        <Carousel breakPoints={breakPoints}>
          {homeCardList.map((list, key) => {
            return (
              <HomeCard
                id={list.id}
                bgImage={list.bgImage}
                title={list.title}
                paragraf={list.paragraf}
                oldPrice={list.oldPrice}
                price={list.price}
                quantity={list.quantity}
                key={key}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default MonsterSixth;
