import React from "react";
import "../../../Styles/Pages/Games/GamesRightCard.scss";
import apple from "../../../Assets/svg/apple.svg";
import lastPrice from "../../../Assets/svg/lastPrice.svg";
import { Link } from "react-router-dom";

function GamesRightCard({
  bgImg,
  displayActions,
  action,
  secondDevice,
  price,
  displayLastP,
  buttonName,
  title,
}) {
  return (
    <Link to='/monsterArena'>
      <div
        className='gamesRightCard'
        style={{ backgroundImage: `url(${bgImg})` }}>
        {/* <div
          className='gamesRightCard__actions'
          style={{ opacity: `${displayActions}` }}>
          <p>{action}</p>
        </div> */}
        <div className='gamesRightCard__header'>
          <div className='gamesCard__app'>
            <img src={apple} alt='' />
          </div>
          <div className='gamesCard__app'>
            <img src={secondDevice} alt='' />
          </div>
        </div>
        <div className='gamesRightCard__price'>
          <span>
            <h2>Free</h2>
          </span>
        </div>
        <div className='gameRightCard__buttons'>
          <button className='buyButton'>Play now</button>
          <button className='learnMoreButton'>Learn More</button>
        </div>
        <p className='titleCard'>{title}</p>
      </div>
    </Link>
  );
}

export default GamesRightCard;
