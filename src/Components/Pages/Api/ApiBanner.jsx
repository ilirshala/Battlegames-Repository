import React from "react";
import "../../../Styles/Pages/Api/ApiBanner.scss";
import MyButton from "../../Shared/MyButton";

function ApiBanner() {
  return (
    <div className='apiBanner'>
      <h1>Become a Battle Games Community Developer</h1>
      <p>
        Our gaming API allows your programs and software applications to
        interact with one another and share rules, settings, specifications, and
        data among others.
      </p>
      <MyButton name='Get Started' />
    </div>
  );
}

export default ApiBanner;
