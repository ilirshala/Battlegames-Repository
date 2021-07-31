import React from "react";
import "../../../Styles/Pages/Career/CareerFifth.scss";
import careerFifthLogo from "../../../Assets/careerFifthLogo.webp";
import MyButton from "../../Shared/MyButton";

function CareerFifth() {
  return (
    <div className='careerFifth'>
      <div className='careerFifth__left'>
        <img src={careerFifthLogo} alt='' />
      </div>
      <div className='careerFifth__right'>
        <div className='careerSecond__line'></div>
        <h1>Internships</h1>
        <p>
          Are you a current college student looking to gain meaningful, hands-on
          experience? You’ve come to the right place! Discover what our
          internship program has to offer.
        </p>
        <MyButton name='Learn more' />
      </div>
    </div>
  );
}

export default CareerFifth;
