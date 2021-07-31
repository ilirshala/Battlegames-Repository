import React from "react";
import "../../Styles/Shared/ArenaCard.scss";
import arenaCardIcon from "../../Assets/arenaCardIcon.webp";
import arenaCardPerson from "../../Assets/arenaCardPerson.webp";
import MyButton from "../Shared/MyButton";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";

function ArenaCard() {
  return (
    <div className='arenaCard'>
      <div className='arenaCardIcon'>
        <img src={arenaCardIcon} alt='' />
      </div>
      <div className='arenaCard__container'>
        <div className='arenaCard__image'>
          <img src={arenaCardPerson} alt='' />
        </div>
        <div className='arenaCard__right'>
          <h1>Battle Arena: Chess</h1>
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
      </div>
    </div>
  );
}

export default ArenaCard;
