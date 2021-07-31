import React from "react";
import "../../Styles/Shared/TestimonialCard.scss";
import logo from "../../Assets/svg/logo.svg";
import RemoveIcon from "@material-ui/icons/Remove";

function TestimonialCard({ logoColor, person, testi }) {
  return (
    <div className='testimonialCard'>
      <div className='logoPlace' style={{ backgroundColor: `${logoColor}` }}>
        <img src={logo} alt='' />
      </div>
      <p>"{testi}"</p>
      <div className='name'>
        <RemoveIcon />
        <h4>{person}</h4>
      </div>
    </div>
  );
}

export default TestimonialCard;
