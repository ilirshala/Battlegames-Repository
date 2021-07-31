import React from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterContent/MonsterContentCard.scss";
import MyButton from "../../../Shared/MyButton";

function MonsterContentCard({
  bgImage,
  opacity,
  displayBlue,
  img,
  title,
  subtitle,
  price,
}) {
  return (
    <div className='monsterContentCard' style={{ opacity: `${opacity}` }}>
      <div
        className='monsterContentCard__bgImage'
        style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className='topBlue' style={{ opacity: `${displayBlue}` }}>
        <h4>DLC</h4>
      </div>
      <div className='downContent'>
        <div className='subtitleContentCard'>
          <div className='imgTitle'>
            <img src={img} alt='' />
            <p>{title}</p>
          </div>
          <p>{subtitle}</p>
        </div>
        <h4>{price}</h4>
      </div>
      <div className='monsterContentCard__footer'>
        <h4>Monster Arena: World</h4>
        <MyButton name='learn more' />
      </div>
    </div>
  );
}

export default MonsterContentCard;
