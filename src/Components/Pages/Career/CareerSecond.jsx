import React from "react";
import "../../../Styles/Pages/Career/CareerSecond.scss";
import careerPlane from "../../../Assets/svg/careerPlane.svg";

function CareerSecond() {
  return (
    <div className='careerSecond'>
      <div className='careerSecond__left'>
        <div className='careerSecond__line'></div>
        <h1>Working at Battle Games</h1>
        <p>
          Battle Games' more than 150 passionate game developers are committed
          to delivering unforgettable gaming experiences. Coming to Battle Games
          means combing their talent and imagination with cutting-edge
          technology to create tomorrow's entertainment.
        </p>
      </div>
      <div className='careerSecond__right'>
        <img src={careerPlane} alt='' />
      </div>
    </div>
  );
}

export default CareerSecond;
