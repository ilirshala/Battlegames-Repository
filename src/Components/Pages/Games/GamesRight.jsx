import React from "react";
import "../../../Styles/Pages/Games/GamesRight.scss";
import GamesRightCard from "./GamesRightCard";
import MyButton from "../../Shared/MyButton";
import { gamesRightList1, gamesRightList2 } from "./gamesRightList";

function GamesRight() {
  return (
    <div className='gamesRight'>
      <div className='homeSecond__line'></div>
      <h1>Featured & Recommended</h1>
      <div className='gamesRight__row'>
        {gamesRightList1.map((card, key) => {
          return (
            <GamesRightCard
              bgImg={card.bgImg}
              displayActions={card.displayActions}
              action={card.action}
              secondDevice={card.secondDevice}
              price={card.price}
              displayLastP={card.displayLastP}
              buttonName={card.buttonName}
              title={card.title}
              key={key}
            />
          );
        })}
      </div>
      <div className='gamesRight__row'>
        {gamesRightList2.map((card, key) => {
          return (
            <GamesRightCard
              bgImg={card.bgImg}
              displayActions={card.displayActions}
              action={card.action}
              secondDevice={card.secondDevice}
              price={card.price}
              displayLastP={card.displayLastP}
              buttonName={card.buttonName}
              title={card.title}
              key={key}
            />
          );
        })}
      </div>
      <MyButton className='loadMore' name='Load More' />
    </div>
  );
}

export default GamesRight;
