import React from "react";
import "../../../Styles/Pages/About/AboutSecond.scss";
import MyButton from "../../Shared/MyButton";

function AboutSecond() {
  return (
    <div className='aboutSecond'>
      <div className='aboutSecondLeft'>
        <hr />
        <h2>Who are we</h2>
        <p>
          Battle Games was founded in 2018 with one clearly defined goal: create
          epic games for everyone. We are a community of designers and
          developers who work hard and play hard, and our camaraderie is fueled
          by our passion for gameplay.
        </p>
        <MyButton name='Read full story' />
      </div>
      <div className='aboutSecondRight'></div>
    </div>
  );
}

export default AboutSecond;
