import React from "react";
import "../../Styles/Shared/ArenaSecondCard.scss";
import arenaCardIcon from "../../Assets/arenaCardIcon.webp";
import MyButton from "../Shared/MyButton";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import arenaSecondCardPerson from "../../Assets/arenaSecondCardPerson.webp";

function ArenaSecondCard() {
  return (
    <div className='arenaSecondCard'>
      <div className='arenaCardIcon'>
        <img src={arenaCardIcon} alt='' />
      </div>
      <div className='arenaSecondCard__container'>
        <div className='arenaSecond__left'>
          <h1>Battle Arena: Legends</h1>
          <p>
            A gorgeous fantasy world based on Chinese mythology. Using the power
            of the sword, you can dash and jump around mid-battle, making for
            some seriously stylish brawls.
          </p>
          <div className='homeHeader__buttons'>
            <MyButton name='Buy now' />
            <MyButton name='LEARN MORE' className='learnButton' />
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
        <div className='arenaSecondCard__image'>
          <img src={arenaSecondCardPerson} alt='' />
        </div>
      </div>
    </div>
  );
}

export default ArenaSecondCard;
