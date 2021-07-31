import React from "react";
import "../../../Styles/Pages/About/AboutFifth.scss";
import MyButton from "../../Shared/MyButton";

function AboutFifth() {
  return (
    <div className='aboutFifth'>
      <div className='aboutFifth__content'>
        <div className='line'></div>
        <h3>Join our team</h3>
        <p>
          We know it takes heroes to make heroes, so if you're ready for a new
          cape, we invite you to apply to join our team.
        </p>
        <MyButton name='open positions' link='/visualDesign' />
      </div>
    </div>
  );
}

export default AboutFifth;
