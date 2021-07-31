import React from "react";
import "../../Styles/Shared/GameCard.scss";
import MyButton from "./MyButton";

function GameCard({ bgImage, description }) {
  return (
    <div className='gameCardAll'>
      <div className='gameCard' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='gameCard__container'>
          <MyButton name='Learn More' />
        </div>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default GameCard;
