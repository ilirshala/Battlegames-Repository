import React from "react";
import "../../Styles/Shared/AboutCard.scss";
function AboutCard({ img, title, paragraf }) {
  return (
    <div className='aboutCard'>
      <img src={img} alt='' />
      <hr />
      <h3>{title}</h3>
      <p>{paragraf}</p>
    </div>
  );
}

export default AboutCard;
