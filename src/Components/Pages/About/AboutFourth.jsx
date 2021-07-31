import React from "react";
import "../../../Styles/Pages/About/AboutFourth.scss";

function AboutFourth() {
  return (
    <div className='aboutFourth'>
      <div className='homeSecond__line'></div>
      <h1>Numbers speaks</h1>
      <div className='aboutFourth__row'>
        <div className='aboutFourth__col'>
          <span>25</span>
          <hr />
          <p>Game Developed</p>
        </div>
        <div className='aboutFourth__col'>
          <span>150</span>
          <hr />
          <p>Team Members</p>
        </div>
        <div className='aboutFourth__col'>
          <span>200k</span>
          <hr />
          <p>Active Players</p>
        </div>
        <div className='aboutFourth__col'>
          <span>17k</span>
          <hr />
          <p>Positive Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default AboutFourth;
