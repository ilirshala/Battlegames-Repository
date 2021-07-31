import React from "react";
import "../../Styles/Shared/HelpCard.scss";
import controller from "../../Assets/svg/controller.svg";

function HelpCard({ img, paragraf }) {
  return (
    <div className='helpCard'>
      <img src={img} alt='' />
      <p>{paragraf}</p>
    </div>
  );
}

export default HelpCard;
