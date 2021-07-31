import React from "react";
import "../../../Styles/Pages/MonsterArena/MonsterVideoCard.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function MonsterVideoCard({ bgImg, title }) {
  return (
    <div
      className='monsterVideoCard'
      style={{ backgroundImage: `url(${bgImg})` }}>
      <div className='homeHeader__right'>
        <button>
          <PlayArrowIcon />
        </button>
      </div>
      <div className='triangle'></div>
      <div className='monsterCard__title'>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default MonsterVideoCard;
