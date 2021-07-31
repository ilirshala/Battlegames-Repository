import React from "react";
import "../../../Styles/Pages/Forums/ForumsCard.scss";
import logo from "../../../Assets/svg/logo.svg";

function ForumsCard({ bgImg, title, bigTitle, opacity }) {
  return (
    <div
      className='forumsCard'
      style={{ opacity: `${opacity}`, backgroundImage: `url(${bgImg})` }}>
      <div className='forumsCardTitle'>
        <h3>{title}</h3>
      </div>
      <div className='forumsCard__container'>
        <div className='forumsCardCon__header'>
          <div className='logoPlace'>
            <img src={logo} alt='' />
          </div>
          <h4>{bigTitle}</h4>
        </div>
        <p>
          The latest video game news, discussions, announcements, industry news,
          sales figures, bargains and reviews. All information related to Battle
          Games.
        </p>
        <div className='forumsCard__views'>
          <div>
            <span>98.4K</span>
            <p>Threads</p>
          </div>
          <div>
            <span>128.5K</span>
            <p>Messages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumsCard;
