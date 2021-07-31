import React from "react";
import "../../../Styles/Pages/Career/CareerFourth.scss";
import careerFourth1 from "../../../Assets/careerFourth1.webp";
import careerFourth2 from "../../../Assets/careerFourth2.webp";
import careerFourth3 from "../../../Assets/careerFourth3.webp";

function CareerFourth() {
  return (
    <div className='careerFourth'>
      <h1>What makes us unique</h1>
      <div className='careerFourth__row'>
        <div className='careerFourth__col'>
          <img src={careerFourth1} alt='' />
          <div className='line'></div>
          <h3>Creativity</h3>
          <p>
            Striving to bring imagination, original ideas, and excitement to
            everything we do.
          </p>
        </div>
        <div className='careerFourth__col'>
          <img src={careerFourth2} alt='' />
          <div className='line'></div>
          <h3>Passion</h3>
          <p>
            We are at our best when we pursue what we love, and have fun doing
            it.
          </p>
        </div>
        <div className='careerFourth__col'>
          <img src={careerFourth3} alt='' />
          <div className='line'></div>
          <h3>Determination</h3>
          <p>
            Bringing focus, drive and conviction to our actions. Thriving on the
            journey, and being motivated to achieve excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerFourth;
