import React from "react";
import "../../../../Styles/Pages/MonsterArena/MonsterNews/MonsterNewsCard.scss";

function MonsterNewsCard({ bgImage, title, subtitle, paragraf }) {
  return (
    <div
      className='monsterNewsCard'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 style={{ opacity: `${title}` }}>Monster Arena: World</h1>
      <div className='monsterNewsCard__container'>
        <h4>NEWS</h4>
        <h3>{subtitle}</h3>
        <p>{paragraf}</p>
        <h5>20.04.2021</h5>
      </div>
    </div>
  );
}

export default MonsterNewsCard;
