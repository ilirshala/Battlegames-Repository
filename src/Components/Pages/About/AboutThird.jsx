import React from "react";
import "../../../Styles/Pages/About/AboutThird.scss";
import AboutCard from "../../Shared/AboutCard";
import aboutCard1 from "../../../Assets/aboutCard1.webp";
import aboutCard2 from "../../../Assets/aboutCard2.webp";
import aboutCard3 from "../../../Assets/aboutCard3.webp";

function AboutThird() {
  return (
    <div className='aboutThird'>
      <h2>What makes us unique</h2>
      <div className='aboutThird__row'>
        <AboutCard
          img={aboutCard1}
          title='Creativity'
          paragraf='Striving to bring imagination, original ideas, and excitement to everything we do.'
        />
        <AboutCard
          img={aboutCard2}
          title='Passion'
          paragraf='We are at our best when we pursue what we love, and have fun doing it.'
        />
        <AboutCard
          img={aboutCard3}
          title='Determination'
          paragraf='Bringing focus, drive and conviction to our actions. Thriving on the journey, and being motivated to achieve excellence.'
        />
      </div>
    </div>
  );
}

export default AboutThird;
