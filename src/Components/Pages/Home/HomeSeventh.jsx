import React from "react";
import "../../../Styles/Pages/Home/HomeSeventh.scss";
import GameCard from "../../Shared/GameCard";
import MyButton from "../../Shared/MyButton";
import { gameList1, gameList2 } from "./gameList";

function HomeSeventh() {
  return (
    <div className='homeSeventh'>
      <div className='homeSecond__line'></div>
      <h1>More of our games</h1>
      <div className='homeSeventh__row1'>
        {gameList1.map((img, key) => {
          return (
            <GameCard
              bgImage={img.bgImage}
              description={img.description}
              key={key}
            />
          );
        })}
      </div>
      <div className='homeSeventh__row2'>
        {gameList2.map((img, key) => {
          return (
            <GameCard
              bgImage={img.bgImage}
              description={img.description}
              key={key}
            />
          );
        })}
      </div>
      <MyButton className='myButtonCard' name='view all' />
    </div>
  );
}

export default HomeSeventh;
