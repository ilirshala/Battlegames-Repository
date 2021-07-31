import React from "react";
import "../../../Styles/Pages/Home/HomeSecond.scss";
import HomeCard from "../../Shared/HomeCard";
import { homeCardList } from "../../Shared/homeCardList";

function HomeSecond() {
  return (
    <div className='homeSecond'>
      <div className='homeSecond__line'></div>
      <h1>Featured & Recommended</h1>
      <div className='homeSecond__row'>
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
      </div>
    </div>
  );
}

export default HomeSecond;
